"use client";

import { Button } from "@/app/(components)/Button";
import Link from "next/link";
import Image from "next/image";

function HeroLayout() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f2f2eb] text-black relative">
      <div className="absolute top-[16%] flex gap-6 animate-slideLoop z-10">
        <Image
          src="/home-page/ghost.png"
          alt="ghost"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <Image
          src="/home-page/ghost-1.png"
          alt="ghost1"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <Image
          src="/home-page/ghost-2.png"
          alt="ghost2"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>
      <div className="flex items-center md:rounded-lg md:bg-white md:shadow-md z-0">
        <section className="mx-auto max-w-5xl p-14 text-center">
          <div className="mb-2 space-x-4 text-sm font-medium uppercase tracking-wide">
            <span>Data Analytics</span>
            <span className="text-blue-600">•</span>
            <span>Frontend Developer</span>
            <span className="text-blue-600">•</span>
            <span>Atomation</span>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Keep Learning
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I didn&apos;t know anything about tech, data, frontend developer at first
            but I have been committed to lifelong learning. I am becoming the
            best of myself and I will never stop learning
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/projects">
              <Button className="rounded-full px-6 text-white bg-[#ab644b] hover:bg-[#72383d]">
                My Work
              </Button>
            </Link>
            <Link href="/about">
              <Button className="rounded-full border px-6 text-black bg-[#ab644b] hover:bg-[#72383d]">
                About Me
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HeroLayout;
