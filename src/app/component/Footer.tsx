import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-area bg-[#f7f7f7] py-24 sm:px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <Image src="/logo.png" alt="Owllup Logo" width={50} height={50} />
            <div className="mt-5 text-gray-600">
              <p>Even when carefully kept, paper journals can be read by anyone who happens.</p>
            </div>
            <div className="mt-5">
              <ul className="flex space-x-4">
                <li>
                  <Link href="#" aria-label="Facebook" className="text-[#f7f7f7] bg-[#3b5999] p-3 rounded-sm">
                    <i className="zmdi zmdi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Twitter" className="text-[#f7f7f7] bg-[#55acee] p-3 rounded-sm">
                    <i className="zmdi zmdi-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Google Plus" className="text-[#f7f7f7] bg-[#dd4b39] p-3 rounded-sm">
                    <i className="zmdi zmdi-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="YouTube" className="text-[#f7f7f7] bg-[#e4405f] p-3 rounded-sm">
                    <i className="zmdi zmdi-youtube-play"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-5 text-gray-500">
              <p>Copyright Owllup Inc. 2024</p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">About</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
              <li>
                <Link href="#">Reviews</Link>
              </li>
              <li>
                <Link href="https://owllup-privacy.onrender.com" target="_blank">
                  Terms & Policies
                </Link>
              </li>
              <li>
                <Link href="#">Help</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <i className="zmdi zmdi-pin zmdi-hc-fw mr-2"></i>
                <span>
                  <strong>Location:</strong> 11 Helen House, Sorbonne Close, Thornaby Post code: Ts17 6DF United Kingdom
                </span>
              </li>
              <li className="flex items-start">
                <i className="zmdi zmdi-email mr-2"></i>
                <span>
                  <strong>Mail:</strong> owlluplimited@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <i className="zmdi zmdi-phone-in-talk mr-2"></i>
                <span>
                  <strong>Phone:</strong> +447459506368
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Newsletter</h4>
            <p className="text-gray-600 mb-4">Don’t Worry, We Won’t Spam Your Inbox</p>
            <form className="flex">
              <input
                type="text"
                className="control w-full px-4 py-3 bg-[#ffffff] border border-[#6858db] rounded-l-full focus:ring focus:ring-blue-200"
                placeholder="Email"
                id="mc-email"
              />
              <button
                className="sub-button bg-[#6858db] text-[#ffffff] px-4 py-3 rounded-r-full hover:bg-[#6858db] transition-all duration-300"
                type="submit"
              >
                
                <i className="zmdi zmdi-long-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

