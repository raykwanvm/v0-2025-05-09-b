import Link from "next/link";
import Image from "next/image";

export default function FooterOld() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Dharma Drum Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-medium">Dharma Drum</h3>
                <p className="font-medium">Meditation Center</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              A meditation hall in the heart of New York City run by volunteers
              of the Dharma Drum Retreat Center.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-amber-800"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/retreats"
                  className="text-sm text-gray-600 hover:text-amber-800"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/teachings"
                  className="text-sm text-gray-600 hover:text-amber-800"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-amber-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-600">
                122 West 28th St, Suite 801
              </p>
              <p className="text-sm text-gray-600">New York, NY 10001</p>
              <p className="text-sm text-gray-600 mt-2">info@ddmc-test.org</p>
              <p className="text-sm text-gray-600">(555) 123-4567</p>
            </address>
          </div>

          <div>
            <h3 className="font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 hover:text-amber-800"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 hover:text-amber-800"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600 hover:text-amber-800"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dharma Drum Meditation Center. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
