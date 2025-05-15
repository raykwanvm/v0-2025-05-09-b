"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./theme-switcher";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);

  // Update visibility based on scroll direction
  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true);
      return;
    }

    if (isAtTop) {
      setIsVisible(true);
      return;
    }

    if (scrollDirection === "up") {
      setIsVisible(true);
    } else if (scrollDirection === "down") {
      setIsVisible(false);
    }
  }, [scrollDirection, isAtTop, isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="DDMC Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-bold text-xl">
              Dharma Drum Meditation Center
            </span>
          </Link>
        </div>
        {/* <span className="hidden md:inline">Dharma Drum Meditation Center</span> */}

        {/* Mobile Logo */}
        <div className="md:hidden flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Dharma Drum Logo"
            width={2}
            height={24}
            className="h-8 w-auto mr-2"
          />
          <div>
            <h3 className="font-medium">Dharma Drum</h3>
            <h3 className="font-medium">Meditation Center</h3>
          </div>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/sample-components"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/sample-components"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Programs
          </Link>
          {/* <ThemeSwitcher /> */}
          <Link
            href="https://lu.ma/ddmc"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Calendar
          </Link>
          <Link
            href="/sample-components"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resources
          </Link>
          <Link
            href="/sample-components"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Get Involved
          </Link>
          <Link
            href="/sample-components"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Samples
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sample-components"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Samples
              </Link>
              <Link
                href="https://lu.ma/ddmc"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/sample-components"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/sample-components"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              {/* <div onClick={() => setIsMenuOpen(false)}>
                <ThemeSwitcher />
              </div> */}
              <Link
                href="/sample-components"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
