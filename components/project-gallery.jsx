"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function ProjectGallery({ media }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    onSelect()
    api.on("select", onSelect)
    return () => api.off("select", onSelect)
  }, [api])

  const openDialog = (index) => {
    setSelectedIndex(index)
    setIsOpen(true)
    if (api) {
      api.scrollTo(index, true)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold text-foreground mb-6">Galería</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {media.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg border cursor-pointer group" onClick={() => openDialog(index)}>
            <div className="relative h-64 bg-muted">
              <Image
                src={item.src}
                alt={item.title || `Miniatura de galería ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] h-[95vh] max-w-none bg-transparent border-none shadow-none flex flex-col items-center justify-center p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Galería de Imágenes del Proyecto</DialogTitle>
            <DialogDescription>
              Navega por las imágenes del proyecto.
            </DialogDescription>
          </DialogHeader>
          
          <Carousel setApi={setApi} opts={{ startIndex: selectedIndex, loop: true }} className="w-full">
            <CarouselContent>
              {media.map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item.src}
                    alt={item.title || `Imagen de galería ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 text-white bg-black/50 hover:bg-black/80 hover:text-white" />
            <CarouselNext className="right-2 text-white bg-black/50 hover:bg-black/80 hover:text-white" />
          </Carousel>
          
          <div className="mt-4 flex flex-col items-center gap-2 w-full px-4">
            <p className="text-white text-sm bg-black/30 px-2 py-1 rounded-md">{media[current]?.title}</p>
            <div className="flex gap-2">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`transition-all duration-300 rounded-full
                    ${index === current ? 'w-4 h-4 bg-white' : 'w-2 h-2 bg-gray-500'}
                  `}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}