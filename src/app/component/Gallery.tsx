"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const images = [
  { src: '/img1.jpg', alt: 'Screenshot 1' },
  { src: '/img2.jpg', alt: 'Screenshot 2' },
  { src: '/img3.jpg', alt: 'Screenshot 3' },
  { src: '/img6.jpg', alt: 'Screenshot 4' },
  { src: '/img7.jpg', alt: 'Screenshot 5' },
  { src: '/img8.jpg', alt: 'Screenshot 6' },
  { src: '/img9.jpg', alt: 'Screenshot 7' },
];

export default function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Loop carousel
    align: 'start', // Align slides to start
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext(); // Automatically scroll to the next slide
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <section className="gallery-area section-padding-top" id="gallery-page">
      <div className="container relative">
        <div className="row">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold">Owllup Screenshot</h3>
            <div className="h-8"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex w-full sm:w-1/2 lg:w-1/4">
                {images.map((image, index) => (
                  <div className="embla__slide w-full p-4" key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {/* <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={scrollPrev}
                className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
              >
                <Image
                  src="/arrow-left.png"
                  alt="arrow"
                  width={60}
                  height={40}
                  className="rounded-lg"
                />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={scrollNext}
                className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
              >
                <Image
                  src="/arrow-right.png"
                  alt="arrow"
                  width={60}
                  height={40}
                  className="rounded-lg"
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

