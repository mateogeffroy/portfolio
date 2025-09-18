"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Importaciones para el Lightbox (modal con zoom)
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"

// Importaciones de tus componentes de botones
import { useLanguage } from '@/components/language-provider'
import { usePrevNextButtons, PrevButton, NextButton } from './EmblaCarouselArrowButtons'
import { useDotButton, DotButton } from './EmblaCarouselDotButton'

// --- LÓGICA RESTAURADA: Funciones para el efecto de opacidad del estilo original ---
const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max)

export default function ProjectGallery({ media }) {
  const { locale, t } = useLanguage()

  // --- Estados para el Lightbox ---
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // --- Configuración del Carrusel ---
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  )

  // --- LÓGICA RESTAURADA: Efecto de opacidad (Tween) ---
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = 0.84 * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
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

  // useEffect para aplicar el efecto de opacidad
  useEffect(() => {
    if (!emblaApi) return
    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
  }, [emblaApi, tweenOpacity, setTweenFactor])


  // --- NUEVA FUNCIONALIDAD: Hooks y lógica para autoplay y lightbox ---
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  // useEffect para reiniciar el Autoplay
  useEffect(() => {
    if (!emblaApi) return
    const autoplay = emblaApi.plugins().autoplay
    if (!autoplay) return

    const stopOnInteraction = () => autoplay.stop()
    // Se añade un pequeño retraso antes de reiniciar el autoplay después de que el carrusel se asiente, con una duracion de 200ms
    const restartAfterSettle = () => setTimeout(() => autoplay.play(), 200)

    emblaApi.on('pointerDown', stopOnInteraction)
    emblaApi.on('settle', restartAfterSettle)

    return () => {
      emblaApi.off('pointerDown', stopOnInteraction)
      emblaApi.off('settle', restartAfterSettle)
    }
  }, [emblaApi])

  // Función para abrir el Lightbox
  const openLightboxOnSlide = useCallback((index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])
  
  const lightboxSlides = media.map(item => ({ src: item.src }))

  return (
    <>
      <div className='relative'>
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          {t.ProjectDetailPage.galleryTitle}
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          {/* ESTRUCTURA RESTAURADA: Contenedor con margen negativo */}
          <div className="flex -ml-4">
            {media.map((item, index) => (
              // ESTRUCTURA RESTAURADA: Múltiples imágenes por slide + NUEVA FUNCIONALIDAD: onClick
              <div
                className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 cursor-pointer"
                key={index}
                onClick={() => openLightboxOnSlide(index)}
              >
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

        <div className="hidden md:block">
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

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        plugins={[Zoom]}
        animation={{ zoom: 500 }}
        zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 1.5,
        }}
      />
    </>
  )
}