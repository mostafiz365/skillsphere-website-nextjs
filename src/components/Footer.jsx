import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#292654]">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />


      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-white">
                Skillsphere
              </h2>
            </div>
             <p className="leading-relaxed text-white max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio sunt ipsam.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/generate"
                  className="text-white"
                >
                  Generate
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/about"
                  className="text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white">
              Start creating
            </h3>

            <p className="text-white">
              Generate your first AI image today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-[#4737b0] text-white font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;