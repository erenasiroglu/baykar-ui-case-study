"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#4361EE]/10 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px] rounded-full bg-[#3A0CA3] flex items-center justify-center">
                  <Image
                    src="/icons/app-logo.svg"
                    alt="Home"
                    width={20}
                    height={23}
                  />
                </div>
                <span className="text-black font-semibold text-[20px]">
                  Rezilla
                </span>
              </div>
              <p className="text-black/80">
                Lorem ipsum has been the industry standard dummy text
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-black">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <span>+90123 45 67</span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Image
                    src="/icons/mail-icon.svg"
                    alt="Mail"
                    width={16}
                    height={16}
                    className="invert"
                  />
                  <span>mail@mail.com</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left hidden md:block">
              <h3 className="text-black font-semibold text-[19.4px] mb-4">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2 text-black/80">
                {[
                  "Home",
                  "About",
                  "Listings",
                  "Services",
                  "Blogs",
                  "Become a Agent",
                ].map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left hidden md:block">
              <h3 className="text-black font-semibold text-[19.4px] mb-4">
                Discovery
              </h3>
              <div className="flex flex-col space-y-2 text-black/80">
                {["Canada", "United States", "Germany", "Africa", "India"].map(
                  (country) => (
                    <Link href="/" key={country}>
                      {country}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-black font-semibold text-[19.4px] mb-4">
                Subscribe to our Newsletter!
              </h3>
              <div className="relative max-w-[350px] mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[60px] rounded-[30px] pl-6 pr-16 text-[#AAAAAA]"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-customPurple rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/arrow-right.svg"
                    alt="Submit"
                    width={22}
                    height={16}
                    className="invert brightness-0"
                  />
                </button>
              </div>
              <div className="mt-6">
                <p className="text-black mb-3">Follow Us on</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Link href="/">
                    <Image
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      width={12}
                      height={22}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/icons/instagram.svg"
                      alt="Instagram"
                      width={22}
                      height={22}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0B090A] min-h-[50px] py-4 flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[#AAAAAA] text-center">
          <span>© Company – All rights reserved</span>
          <div className="hidden md:flex gap-6">
            <Link href="/">Terms and Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
