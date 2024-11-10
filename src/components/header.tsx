"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-800 text-stone-200 py-4 px-6 md:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/18.png"
            alt="Earthy Vibes Coffee Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold">Earthy Vibes Coffee</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-700">
            About Us
          </Link>
          <Link href="/shop" className="hover:text-green-700">
            Shop
          </Link>
          <Link href="/sustainability" className="hover:text-green-700">
            Sustainability
          </Link>
          {/* <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link> */}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-700">
            About Us
          </Link>
          <Link href="/shop" className="hover:text-green-700">
            Shop
          </Link>
          <Link href="/sustainability" className="hover:text-green-700">
            Sustainability
          </Link>
          <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
