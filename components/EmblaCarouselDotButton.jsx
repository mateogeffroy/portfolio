"use client"
import React, { useCallback, useEffect, useState } from 'react'

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

export const DotButton = React.forwardRef((props, ref) => {
    const { className, ...restProps } = props
    return (
        <button type="button" ref={ref} className={`w-2.5 h-2.5 bg-muted-foreground/50 rounded-full transition-all duration-300 data-[selected=true]:w-6 data-[selected=true]:bg-primary ${className}`} {...restProps} />
    )
})
DotButton.displayName = 'DotButton'