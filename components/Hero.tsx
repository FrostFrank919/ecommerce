import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='flex flex-col'>
      {/* {This is the Hero Section} */}
      <div className='relative h-[80vh] w-full overflow-hidden z-0'>
      <div className="absolute inset-0">
        <Image
          src="/images/wallpaper.jpg"
          alt="Rudraksha beads"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className='container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white'>
        <h1 className="animate-fade-in mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Experience the Power of Rudraksha
        </h1>
        <p className="animate-fade-in mb-8 max-w-2xl text-lg md:text-2xl">
          Authentic, Energized, and Blessed Rudraksha Beads for Your Spiritual Journey
        </p>
        <Button
          asChild
          className="p-6 text-lg animate-fade-in bg-primary hover:bg-primary/90 text-white"
        >
          <Link href="/shop">
            Shop Now
          </Link>
        </Button>
      </div>
      </div>
    </section>
  );
}
