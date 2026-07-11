"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { siteImages } from "@/lib/images";

const keyPoints = [
  "Non-contact measurement through a sight glass",
  "Up to 60 moisture checks per second",
  "±0.02% repeatability depending on material",
  "RS232, Ethernet, and 4-20mA integration options",
  "Suitable for starch, minerals, chemicals, and building materials",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden industrial-gradient">
      <div className="absolute inset-0 industrial-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 w-full">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Online Near-Infrared Moisture Analyzer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Real-Time Moisture Control for Drying, Conveying, and Powder Processing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-xl">
              Based on supplier-backed online NIR technology, this system helps
              manufacturers replace delayed manual checks with continuous
              moisture data across starch, soda ash, ceramic powder, PVC
              additives, sand, and other process lines.
            </p>

            <ul className="mt-8 space-y-3">
              {keyPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact?type=datasheet" variant="primary" size="lg">
                Request Datasheet
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact?type=engineer" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Talk to Engineer
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SiteImage
              src={siteImages.heroProduct}
              alt="Online NIR moisture analyzer installed on a real corn processing production line"
              variant="hero"
              priority
              className="aspect-[16/10] w-full shadow-2xl shadow-black/30"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
