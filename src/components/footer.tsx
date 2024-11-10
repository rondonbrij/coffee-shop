import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200 py-12 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-green-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-green-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-green-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Santa Monica</p>
          <p>Puerto Princesa City, Palawan</p>
          <p>ronjames6213@gmail.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-400">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-green-400">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-green-400">
              <Twitter />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Stay updated with our latest offers and news</p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Your email"
              className="rounded-r-none bg-stone-700 border-stone-600 text-stone-200"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-green-700 hover:bg-green-800"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2024 Earthy Vibes Coffee. All rights reserved.
      </div>
    </footer>
  );
}
