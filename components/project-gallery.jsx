"use client"



import * as React from "react"

import {

 Carousel,

 CarouselContent,

 CarouselItem,

 CarouselNext,

 CarouselPrevious,

} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"

import {

 Dialog,

 DialogContent,

 DialogTitle,

} from "@/components/ui/dialog"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import { ChevronLeft, ChevronRight } from "lucide-react"



export default function ProjectGallery({ media }) {

 const { locale, t } = useLanguage()

 const [api, setApi] = React.useState()

 const [current, setCurrent] = React.useState(0)



 const [selectedIndex, setSelectedIndex] = React.useState(null)



 const plugin = React.useRef(

  Autoplay({ delay: 3000, stopOnInteraction: true })

 )



 React.useEffect(() => {

  if (!api) return

  const onSelect = () => setCurrent(api.selectedScrollSnap())

  onSelect()

  api.on("select", onSelect)

  return () => api.off("select", onSelect)

 }, [api])



 const handleOpenImage = (index) => {

  setSelectedIndex(index)

  plugin.current.stop() // detener autoplay cuando se abre modal

 }



 const handleCloseImage = () => {

  setSelectedIndex(null)

  plugin.current.reset() // reanudar autoplay al cerrar modal

 }



 const next = () => setSelectedIndex((prev) => (prev + 1) % media.length)

 const prev = () => setSelectedIndex((prev) => (prev - 1 + media.length) % media.length)



 return (

  <div>

   <h2 className="text-3xl font-semibold text-foreground mb-6">

    {t.ProjectDetailPage.galleryTitle}

   </h2>



   {/* Carrusel principal */}

   <Carousel

    plugins={[plugin.current]}

    setApi={setApi}

    onMouseEnter={plugin.current.stop}

    onMouseLeave={plugin.current.reset}

    opts={{ loop: true }}

    className="w-full"

   >

    <CarouselContent>

     {media.map((item, index) => (

      <CarouselItem

       key={index}

       className="md:basis-1/3 sm:basis-1/1"

      >

       <button

        onClick={() => handleOpenImage(index)}

        className="w-full h-full aspect-video relative overflow-hidden rounded-lg cursor-pointer group"

       >

        <Image

         src={item.src}

         alt={item.title[locale] || `Imagen ${index + 1}`}

         fill

         sizes="(max-width: 768px) 100vw, 33vw"

         className="object-cover transition-transform duration-300 group-hover:scale-105"

        />

       </button>

      </CarouselItem>

     ))}

    </CarouselContent>

    <CarouselPrevious />

    <CarouselNext />

   </Carousel>



   {/* Modal de imagen ampliada */}

   <Dialog open={selectedIndex !== null} onOpenChange={handleCloseImage}>

    <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">

     <VisuallyHidden>

      <DialogTitle>Imagen ampliada</DialogTitle>

     </VisuallyHidden>



     {selectedIndex !== null && (

      <div className="flex flex-col items-center">

       {/* Imagen principal */}

       <div className="relative flex items-center justify-center max-w-4xl w-full">

        <button

         onClick={prev}

         className="absolute left-0 p-2 text-white"

        >

         <ChevronLeft size={40} />

        </button>



        <img

         src={media[selectedIndex].src}

         alt={media[selectedIndex].title?.[locale] || ""}

         className="max-h-[80vh] object-contain cursor-zoom-in"

         onClick={(e) => {

          e.currentTarget.classList.toggle("scale-150")

         }}

        />



        <button

         onClick={next}

         className="absolute right-0 p-2 text-white"

        >

         <ChevronRight size={40} />

        </button>

       </div>



       {/* Miniaturas */}

       <div className="flex gap-2 mt-4 overflow-x-auto max-w-4xl">

        {media.map((item, idx) => (

         <img

          key={idx}

          src={item.src}

          alt={item.title?.[locale] || ""}

          onClick={() => setSelectedIndex(idx)}

          className={`h-20 w-32 object-cover rounded cursor-pointer transition

           ${idx === selectedIndex

            ? "ring-4 ring-blue-500"

            : "opacity-60 hover:opacity-100"}`}

         />

        ))}

       </div>

      </div>

     )}

    </DialogContent>

   </Dialog>

  </div>

 )

}