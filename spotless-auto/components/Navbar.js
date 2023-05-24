import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`flex ${!isOpen ? 'justify-between' : 'justify-center'} items-center py-4`}>
          <div className=''>
            <Link href="/">
              <p className="text-white font-semibold text-lg">Spotless Auto</p>
            </Link>
          </div>
          <div className="md:hidden absolute right-5 top-5">
            <button
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 5H5v1h10V5zm0 4H5v1h10V9zm0 4H5v1h10v-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h12V5H4v1zm0 4h12v-1H4v1zm0 4h12v-1H4v1z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`hidden md:block ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex space-x-4">
              <li>
                <Link href="/">
                  <p className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Services</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="text-white hover:text-gray-300 transition duration-300 ease-in-out">About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className=" py-3 space-y-2 sm:px-3">
          <li>
            <Link href="/">
              <p className="text-white flex hover:text-gray-800 hover:bg-slate-400 transition duration-300 ease-in-out justify-center">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="text-white flex hover:text-gray-800 hover:bg-slate-400 transition duration-300 ease-in-out justify-center">Services</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-white flex hover:text-gray-800 hover:bg-slate-400 transition duration-300 ease-in-out justify-center">About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-white flex hover:text-gray-800 hover:bg-slate-400 transition duration-300 ease-in-out justify-center">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
