"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-20 py-16 bg-gradient-to-br from-orange-100 to-pink-100">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center sm:text-left max-w-xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Healing Begins Here
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Dr. Serena Blake offers professional and compassionate therapy to help you navigate life’s challenges and thrive.
        </p>
        <a
          href="#contact"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300"
        >
          Book a Free Consult
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-10 sm:mb-0"
      >
        <Image
          src="/dr-serena.png" // Place a relevant therapist image in `public/dr-serena.png`
          alt="Dr. Serena Blake"
          width={400}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
