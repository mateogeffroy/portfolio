"use client"

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { usePrevNextButtons, PrevButton, NextButton } from './EmblaCarouselArrowButtons'
import { useDotButton, DotButton } from './EmblaCarouselDotButton'

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max)

export default function ProjectGallery({ media }) {
  const { locale, t } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const tweenFactor = React.useRef(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const setTweenFactor = React.useCallback((emblaApi) => {
    tweenFactor.current = 0.84 * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = React.useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
            }
          })
        }
        
        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
  }, [emblaApi, tweenOpacity, setTweenFactor])


  return (
    <div className='relative'>
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        {t.ProjectDetailPage.galleryTitle}
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {media.map((item, index) => (
            <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4" key={index}>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.title[locale] || `Imagen ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-[calc(100%+2rem)] -ml-4 flex justify-between items-center px-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            data-selected={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  )
}