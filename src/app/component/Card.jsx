"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Seamless Chat",
    description: "Chat for seamless communication and collaboration! With its intuitive interface and robust features.",
    icon: "/service-icon-1.png",
    delay: "0.3s"
  },
  {
    id: 2,
    title: "Intuitive Interface",
    description: "Owllup offers a user-friendly interface, making navigation seamless and enjoyable.",
    icon: "/service-icon-2.png",
    delay: "0.5s"
  },
  {
    id: 3,
    title: "Personalized Feeds",
    description: "Tailored to your interests, Owllup's feed algorithm ensures you never miss out on important updates or engaging content.",
    icon: "/service-icon-3.png",
    delay: "0.7s"
  }
];

const CardComponent = () => {
  const [clicked, setClicked] = useState(null);

  const handleCardClick = (id) => {
    setClicked(id);
    setTimeout(() => setClicked(null), 300); // Reset the animation after 300ms
  };

  return (
    <>
      <section className="py-16" id="about-page">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Why Choose Owllup</h3>
            <div className="h-16"></div>
          </div>

          {/* Responsive grid for cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`text-center mb-8 p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  clicked === service.id ? 'scale-95' : ''
                }`}
                onClick={() => handleCardClick(service.id)}
                style={{ animationDelay: service.delay }}
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#22233b]">{service.title}</h3>
                <p className="text-[#22233b]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
      
      {/* Mobile Image (hidden on small screens and displayed on larger screens) */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="/mobile-1.png"
          alt="Mobile"
          width={800}
          height={400}
          className="object-cover mx-auto lg:mx-0"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-5/12 lg:ml-auto lg:pl-12 text-center lg:text-left">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start items-center mb-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-6 animate-fadeInUp text-[#22233b]" style={{ animationDelay: '0.5s' }}>
          Cross-platform Accessibility
        </h3>

        {/* Description */}
        <p className="text-lg text-[#22233b] leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          Access Owllup anytime, anywhere, with its cross-platform compatibility, ensuring you're always connected on the go.
        </p>

        {/* Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  </div>
</section>

<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between">
      
      {/* Content on the left */}
      <div className="w-full lg:w-1/2 text-center sm:text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
        <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </div>
        <h3 className="text-3xl font-bold mb-4 animate-fadeInUp text-[#22233b]" style={{ animationDelay: '0.5s' }}>
          High Quality Video Chatting
        </h3>
        <p className="text-lg leading-relaxed animate-fadeInUp text-[#22233b]" style={{ animationDelay: '0.7s' }}>
          Ready to Connect Face-to-Face? Dive into the world of Owllup Video Chat! 🌟 Seamlessly catch up with friends, collaborate with colleagues, or simply hang out with loved ones, all with crystal-clear video and audio quality.
        </p>
      </div>

      {/* Image on the right */}
      <div className="w-full lg:w-1/2 text-center lg:text-right">
        <Image
          src="/network-bg.png"
          alt="Network Background"
          width={800}
          height={600}
          className="mx-auto lg:mx-0 object-cover"
        />
      </div>
      
    </div>
  </div>
</section>

    </>
  );
};

export default CardComponent;
