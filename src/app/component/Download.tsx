import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";



export default function Download () {

    return (

        <div>
             <section className="h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image on the left */}
            <div className="image-container flex justify-center">
              <Image
                src="/video-img.jpg" 
                alt="Owllup App Preview"
                width={500} 
                height={500} 
                className="rounded-lg"
              />
            </div>
  
            {/* Text and buttons on the right */}
            <div className="text-container">
              <h2 className="page-title font-bold text-3xl wow fadeInUp mb-4" data-wow-delay="0.3s">
                Download Our Free Owllup App
              </h2>
              <p className="wow fadeInUp mb-6" data-wow-delay="0.5s">
                Take your journal wherever you go with our apps for iPhone, iPad, and Android phones &amp; tablets.
              </p>
              <div className="space-30"></div>
  
              <div className="space-y-3">
                  <Link
                    href="#"
                    className="inline-flex items-center bg-black text-white px-10 py-4 rounded-full shadow-lg hover:bg-[#6858db] transition"
                  >
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
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.owllup.android"
                    className="inline-flex items-center bg-black text-white px-10 py-4 ml-7 rounded-full shadow-lg hover:bg-[#6858db] transition"
                  >
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
      </section>

      <ContactForm />
        </div>

       

    )
}