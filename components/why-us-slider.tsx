"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { LuChevronLeft, LuChevronRight } from "@/lib/icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  { src: '/images/why-us/main.webp', alt: '«Доверие»' },
  { src: '/images/why-us/coffin1.webp', alt: '«Доверие»' },
  { src: '/images/why-us/coffin2.webp', alt: '«Доверие»' },
  { src: '/images/why-us/clothes1.webp', alt: '«Доверие»' },
  { src: '/images/why-us/clothes2.webp', alt: '«Доверие»' },
  { src: '/images/why-us/tape1.webp', alt: '«Доверие»' },
] as const

export function WhyUsSlider() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div className="why-us-slider relative h-full min-h-80 w-full lg:min-h-0">
      <Swiper
        modules={[EffectCards, Navigation]}
        effect="cards"
        grabCursor
        cardsEffect={{ perSlideRotate: 4, slideShadows: false }}
        navigation={{
          prevEl: '.why-us-slider-prev',
          nextEl: '.why-us-slider-next',
        }}
        pagination={{
          el: '.why-us-slider-pagination',
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-full w-full overflow-hidden rounded-2xl"
        aria-label="Фотографии агентства"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.src}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={1000}
              quality={75}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="aspect-3/4 w-[70%] rounded-2xl object-cover lg:w-full"
              sizes="(min-width: 1024px) 28vw, 70vw"
              priority={i === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Предыдущее фото"
        className="why-us-slider-prev absolute top-1/2 left-3 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground backdrop-blur-sm transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40"
      >
        <LuChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Следующее фото"
        className="why-us-slider-next absolute top-1/2 right-3 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground backdrop-blur-sm transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40"
      >
        <LuChevronRight className="h-5 w-5" />
      </button>

      <div className="why-us-slider-pagination absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2" />
    </div>
  )
}
