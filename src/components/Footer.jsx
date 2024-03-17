import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <img
            src="https://www.codewithfaraz.com/InstaPic.png"
            className="mr-3 h-10 w-auto"
            alt="CodewithFaraz Footer Logo"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Get the latest news!
                </h2>
                <p className="mt-4 text-gray-400">
                  Don't be shy. Say hi 👋. Do you have a project or an idea that
                  could use some help? Let's work together.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <div className="relative max-w-lg">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="user@codewithfaraz.com"
                    className="w-full rounded-full border-gray-200 outline-none bg-gray-100 p-4 pe-32 text-sm font-medium"
                  />
                  <button
                    type="submit"
                    id="subsbtn"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.codewithfaraz.com"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/about-us"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/blog"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewithfaraz.com/contact"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Write For Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Additional lists */}
          </div>
        </div>

        <div className="mt-8 border-t pt-8 border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-400">
              © 2024. DigiGold All rights reserved.
            </p>
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="https://www.codewithfaraz.com/terms-and-conditions"
                  className="transition hover:opacity-75 text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.codewithfaraz.com/privacy-policy"
                  className="transition hover:opacity-75 text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
