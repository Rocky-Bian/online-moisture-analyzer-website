"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      <Image
        src={siteImages.hero}
        alt="ALZRO online NIR moisture analyzer — real-time measurement on industrial conveyor line"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-24 pt-32 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex w-full max-w-md flex-col gap-4 sm:flex-row"
        >
          <Button href="/contact?type=datasheet" variant="primary" size="lg">
            Request Datasheet
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href="/contact?type=engineer"
            variant="outline"
            size="lg"
            className="border-white/40 bg-primary/20 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
          >
            Talk to Engineer
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
