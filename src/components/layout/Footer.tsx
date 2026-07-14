import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerLinks } from "@/content/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <BrandLogo variant="light" className="h-12" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Supplier-backed online moisture measurement solutions for starch,
              chemicals, ceramics, aggregates, fibers, and other continuous
              industrial process lines.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                rocky@alzro.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +86 15165848866
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Electronic Information Industrial Park, Zibo, Shandong, China
              </p>
            </div>
            <Link
              href="/contact?type=engineer"
              className="mt-4 inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm">Contact Sales</span>
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Industries
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-end">
            <form className="flex gap-2 max-w-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Work email for newsletter"
                className="flex-1 rounded-sm border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="shrink-0 rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-8 flex flex-col gap-2 text-xs text-white/40 md:flex-row md:justify-between">
            <p>&copy; {new Date().getFullYear()} ALZRO Industrial Technology. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
