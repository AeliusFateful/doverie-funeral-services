"use client";

import Image from "next/image";
import { useRef } from "react";
import { LuChevronLeft, LuChevronRight } from "@/lib/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import type { ProductItem } from "@/lib/data/products";

type ProductsSliderProps = {
  products: ProductItem[];
};

export function ProductsSlider({ products }: ProductsSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const pauseAutoplay = () => swiperRef.current?.autoplay?.stop();
  const resumeAutoplay = () => swiperRef.current?.autoplay?.start();

  return (
    <div
      className="products-slider relative px-10 sm:px-12"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={24}
        grabCursor
        loop
        loopAddBlankSlides={false}
        watchOverflow
        speed={600}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onTouchStart={pauseAutoplay}
        onTouchEnd={resumeAutoplay}
        onSliderMove={pauseAutoplay}
        breakpoints={{
          640: { slidesPerView: 2, slidesPerGroup: 1 },
          1024: { slidesPerView: 4, slidesPerGroup: 1 },
        }}
        navigation={{
          prevEl: ".products-slider-prev",
          nextEl: ".products-slider-next",
        }}
        aria-label="Ритуальные принадлежности"
      >
        {products.map((product) => (
          <SwiperSlide key={product.title} className="h-auto!">
            <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/40 transition-colors duration-300 ease-in-out hover:border-accent/40">
              <div className="relative aspect-4/5 shrink-0 overflow-hidden bg-muted/30">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-44 flex-1 flex-col p-6">
                <h3 className="font-serif text-xl text-foreground">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                  {product.text}
                </p>
                <span className="mt-5 text-base font-medium tabular-nums text-accent">
                  {product.price}
                </span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Предыдущий товар"
        className="products-slider-prev absolute inset-y-0 -left-3 z-10 flex w-10 items-center justify-center rounded-none border border-border/80 border-y-0 bg-background/90 text-foreground backdrop-blur-sm transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 sm:-left-4 sm:w-11"
      >
        <LuChevronLeft className="h-5 w-5" strokeWidth={2.5} />
      </button>
      <button
        type="button"
        aria-label="Следующий товар"
        className="products-slider-next absolute inset-y-0 -right-3 z-10 flex w-10 items-center justify-center rounded-none border border-border/80 border-y-0 bg-background/90 text-foreground backdrop-blur-sm transition-colors duration-300 ease-in-out hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 sm:-right-4 sm:w-11"
      >
        <LuChevronRight className="h-5 w-5" strokeWidth={2.5} />
      </button>
    </div>
  );
}
