import Link from 'next/link';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import Navbar from "./component/Navbar";
import CardComponent from './component/Card';
import Image from 'next/image';
import FeaturesSection from './component/Features';
import GallerySection from './component/Gallery';
import TestimonialsSection from './component/Testimony';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer'
import Download from './component/Download';

export default function Home() {
  return (
      <>
          <Navbar />

          <header className="relative pt-24 md:pt-32 lg:pt-40" id="home-page">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/header-bg-1.jpg')" }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Text Section */}
            <div className="w-full md:w-7/12 lg:w-6/12 text-center md:text-left">
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp text-[#22233b]"
                style={{ animationDelay: '0.4s' }}
              >
                Now Chatting is Simple <br /> and More Fun With Owllup.
              </h1>
              <p
                className="text-lg mb-8 animate-fadeInUp text-[#22233b]"
                style={{ animationDelay: '0.6s' }}
              >
                Hey everyone! We've got some fantastic updates <br /> coming your way on Owllup!
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <Link href="#" className="inline-flex items-center bg-black text-white px-10 py-4 rounded-full shadow-lg hover:bg-[#6858db] transition">
                  <span className="mr-2">
                    <Image
                      src="/app-store.png"
                      alt="App Store"
                      width={35}
                      height={20}
                    />
                  </span>
                  <div>
                    <small className="block text-sm">Get It From</small>
                    <strong className="block text-lg">App Store</strong>
                  </div>
                </Link>

                <Link href="https://play.google.com/store/apps/details?id=com.owllup.android" className="inline-flex items-center bg-black text-white px-10 py-4 rounded-full shadow-lg hover:bg-[#6858db] transition">
                  <span className="mr-2">
                    <Image
                      src="/play-store.png"
                      alt="Play Store"
                      width={35}
                      height={20}
                    />
                  </span>
                  <div>
                    <small className="block text-sm">Get It From</small>
                    <strong className="block text-lg">Google Play</strong>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

        <CardComponent />

        <FeaturesSection />

        <GallerySection /> 

        <TestimonialsSection />

        <Download />

        

        <Footer />
      </>
  );
}
