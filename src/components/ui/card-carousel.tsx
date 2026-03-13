"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .carousel-container {
    width: 100%;
    overflow: hidden;
  }
  
  .swiper {
    width: 100%;
    overflow: visible;
  }
  
  @media (max-width: 640px) {
    .swiper {
      padding-bottom: 30px;
    }
    .swiper-slide {
      width: 240px !important;
      height: 300px;
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .swiper {
      padding-bottom: 40px;
    }
    .swiper-slide {
      width: 280px !important;
      height: 360px;
    }
  }
  
  @media (min-width: 1025px) {
    .swiper {
      padding-bottom: 50px;
    }
    .swiper-slide {
      width: 300px !important;
      height: 400px;
    }
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: auto;
    padding: 0 8px;
  }
  
  @media (min-width: 641px) {
    .swiper-slide {
      padding: 0 12px;
    }
  }
  
  @media (min-width: 1025px) {
    .swiper-slide {
      padding: 0 15px;
    }
  }
  
  .swiper-slide iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #D00636;
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 20px;
  }
  
  @media (max-width: 640px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
  `
  return (
    <div className="carousel-container w-full max-w-xl lg:max-w-xl">
      <style>{css}</style>
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : undefined
        }
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="size-full rounded-3xl  overflow-hidden">
              <iframe
                src={image.src}
                width="100%"
                height="100%"
                className="size-full rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                scrolling="no"
              />
            </div>
          </SwiperSlide>
        ))}
        {images.map((image, index) => (
          <SwiperSlide key={`dup-${index}`}>
            <div className="size-full rounded-3xl overflow-hidden">
              <iframe
                src={image.src}
                width="100%"
                height="100%"
                className="size-full rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                scrolling="no"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
