"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { className, ...restProps } = props
  return (
    <button
      className={`cursor-pointer absolute top-1/2 -left-10 -translate-y-1/2 bg-card/80 hover:bg-card text-card-foreground rounded-full p-2 z-10 transition-opacity disabled:opacity-0 ${className}`}
      type="button"
      {...restProps}
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  )
}

export const NextButton = (props) => {
  const { className, ...restProps } = props
  return (
    <button
      className={`cursor-pointer absolute top-1/2 -right-10 -translate-y-1/2 bg-card/80 hover:bg-card text-card-foreground rounded-full p-2 z-10 transition-opacity disabled:opacity-0 ${className}`}
      type="button"
      {...restProps}
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  )
}