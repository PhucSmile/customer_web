const Footer = () => {
  return (
    <div className="bg-underground dark:bg-gray-900 select-none py-10">
      <footer className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flexBetween border-t border-gray-400 px-4 py-4 text-sm">
          <div>
            <span>
              Copyright ©{' '}
              <Link href="/" className="font-semibold">
                Moga{' '}
              </Link>
              {new Date().getFullYear()}.
            </span>
          </div>
          <div className="">
            <Link
              className="flexCenter font-semibold text-neutral-600"
              href="http://psctelecom.com.vn"
              target="_blank"
            >
              <span>Designed & Developed by </span>
              <span>
                <Image
                  width={40}
                  height={40}
                  src="/logo-psc.png"
                  alt=""
                  style={{ width: 'auto', height: 'auto' }}
                />
              </span>
            </Link>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
