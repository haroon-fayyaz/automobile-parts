'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faUser,
  faShoppingCart,
  faBars,
  faTimes,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Top bar - hidden on mobile */}
        <div className="hidden md:flex items-center justify-between py-2 text-xs">
          <div>Emergency support hotline: +30 123-456-789</div>
          <div className="flex items-center space-x-4">
            <Link href="/faq" className="hover:text-gray-300">
              Customer FAQ
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About us
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact us
            </Link>
            <div className="flex items-center space-x-2">
              <Link href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-red-600 rounded-full"></div>
            <span className="text-2xl font-bold">maranello</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="font-semibold hover:text-red-500">
              PRODUCTS
            </Link>
            <Link href="/brands" className="hover:text-red-500">
              SHOP BY BRAND
            </Link>
            <Link href="/offers" className="hover:text-red-500">
              OFFERS
            </Link>
            <Link href="/guides" className="hover:text-red-500">
              GUIDES
            </Link>
            <div className="relative group">
              <button className="hover:text-red-500">
                DEMOS <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black p-2 rounded shadow-lg">
                <Link
                  href="/demo1"
                  className="block py-1 px-2 hover:bg-gray-100"
                >
                  Demo 1
                </Link>
                <Link
                  href="/demo2"
                  className="block py-1 px-2 hover:bg-gray-100"
                >
                  Demo 2
                </Link>
                <Link
                  href="/demo3"
                  className="block py-1 px-2 hover:bg-gray-100"
                >
                  Demo 3
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-red-500">
                US (USD $){' '}
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black p-2 rounded shadow-lg">
                <button className="block py-1 px-2 hover:bg-gray-100 w-full text-left">
                  EUR (€)
                </button>
                <button className="block py-1 px-2 hover:bg-gray-100 w-full text-left">
                  GBP (£)
                </button>
                <button className="block py-1 px-2 hover:bg-gray-100 w-full text-left">
                  JPY (¥)
                </button>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="hover:text-red-500">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="hover:text-red-500">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button
              className="md:hidden hover:text-red-500"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4">
              <Link href="/products" className="block py-2 hover:text-red-500">
                Products{' '}
                <FontAwesomeIcon icon={faChevronDown} className="float-right" />
              </Link>
              <Link href="/brands" className="block py-2 hover:text-red-500">
                Shop by Brand
              </Link>
              <Link href="/offers" className="block py-2 hover:text-red-500">
                Offers
              </Link>
              <Link href="/guides" className="block py-2 hover:text-red-500">
                Guides
              </Link>
              <Link href="/demos" className="block py-2 hover:text-red-500">
                Demos{' '}
                <FontAwesomeIcon icon={faChevronDown} className="float-right" />
              </Link>
              <Link href="/tires" className="block py-2 hover:text-red-500">
                Tires{' '}
                <FontAwesomeIcon icon={faChevronDown} className="float-right" />
              </Link>
              <Link href="/wheels" className="block py-2 hover:text-red-500">
                Wheels{' '}
                <FontAwesomeIcon icon={faChevronDown} className="float-right" />
              </Link>
              <Link href="/batteries" className="block py-2 hover:text-red-500">
                Batteries{' '}
                <FontAwesomeIcon icon={faChevronDown} className="float-right" />
              </Link>
              <Link href="/parts" className="block py-2 hover:text-red-500">
                Parts & Accessories{' '}
                <FontAwesomeIcon icon={faChevronDown} className="float-right" />
              </Link>
              <div className="py-2">
                <button className="w-full text-left py-2 hover:text-red-500">
                  US (USD $){' '}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="float-right"
                  />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
