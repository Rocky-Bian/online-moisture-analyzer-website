import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
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
              Field-proven online moisture measurement solutions for starch,
              chemicals, ceramics, aggregates, fibers, and other continuous
              industrial process lines.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                rocky@alzro.com
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                WhatsApp: +8615165848866
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Electronic Information Industrial Park, Zibo, Shandong, China
              </p>
            </div>
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
