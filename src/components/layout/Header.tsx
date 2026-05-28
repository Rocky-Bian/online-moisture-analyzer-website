"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent">
            <span className="text-sm font-bold text-white">A</span>
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-wider",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            ALZRO
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-sm",
                pathname === item.href
                  ? "text-accent"
                  : isScrolled
                    ? "text-primary/80 hover:text-accent"
                    : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            href="/contact?type=datasheet"
            variant={isScrolled ? "primary" : "white"}
            size="sm"
          >
            Request Datasheet
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden p-2",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-3 text-sm font-medium rounded-sm",
                    pathname === item.href
                      ? "text-accent bg-accent/5"
                      : "text-primary hover:bg-surface"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  href="/contact?type=datasheet"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Request Datasheet
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
