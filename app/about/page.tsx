import React from 'react';
import Image from 'next/image';
import { Leaf, Target, History, Users, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';   

export default function About() {
  return (
    <>
    <Header />
    <section className='flex flex-col'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full overflow-hidden'>
        <div className="absolute inset-0">
          <Image
            src="/images/spiritual.png"
            alt="About Rudraksha"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className='container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white'>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Spiritual Journey
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Connecting Souls with Ancient Wisdom Through Sacred Rudraksha
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div className='flex items-center gap-2'>
                <Leaf className='h-8 w-8 text-primary' />
                <h2 className='text-3xl font-bold'>Our Mission</h2>
              </div>
              <p className='text-lg text-gray-600'>
              Our goal is to empower spiritual searchers with genuine, superior Rudraksha beads, upholding long-standing customs while encouraging contemporary spiritual relationships. 
               We think that Rudraksha is a potent tool for protection, spiritual connection, and inner development, and it is more than just a sacred bead.  By offering authentic Rudraksha, we respect the knowledge of the past while assisting people in experiencing its significant spiritual and therapeutic advantages in the modern world.
                We aspire to assist seekers on their path to enlightenment, balance, and inner serenity via faith and tradition.
              </p>
              <Button asChild className='bg-primary hover:bg-primary/90'>
                <Link href="/shop">
                  Explore Collection
                </Link>
              </Button>
            </div>
            <div className='relative h-96 rounded-lg overflow-hidden'>
              <Image
                src="/images/mission-image.png"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Our Core Values</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              { icon: Gem, title: 'Authenticity', text: 'Authenticity is at the core of our mission, ensuring each Rudraksha bead is genuine, pure, and spiritually powerful. Sourced exclusively from sacred regions in Nepal, our beads are carefully selected and ethically harvested to maintain their transformative energy.' },
              { icon: Target, title: 'Integrity', text: 'Integrity is the foundation of our business, guiding us to uphold transparency, honesty, and respect in all our dealings. We are committed to ethical practices, ensuring that every step, from sourcing to delivery, aligns with our values of fairness and responsibility.' },
              { icon: Users, title: 'Community', text: 'We are dedicated to building a global spiritual family, connecting like-minded seekers from all corners of the world. Through shared faith and values, we create a supportive community that fosters growth, unity, and mutual empowerment.' },
            ].map((value, index) => (
              <div key={index} className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <value.icon className='h-12 w-12 text-primary mb-4' />
                <h3 className='text-xl font-bold mb-2'>{value.title}</h3>
                <p className='text-gray-800'>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center gap-4 mb-12'>
            <History className='h-8 w-8 text-primary' />
            <h2 className='text-3xl font-bold'>Our Story</h2>
          </div>
            <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4 '>
              <p className='text-lg text-gray-800'>
                Founded in 2010 by spiritual practitioners, Rudraksha Wisdom began as a small
                ashram initiative to make authentic beads accessible. What started as a local
                endeavor has blossomed into a global community of over 50,000 spiritual seekers.
              </p>
              <p className='text-lg text-gray-800'>
               With a deep commitment to preserving the sacred traditions of Rudraksha,
               we have expanded our reach while maintaining the highest standards of authenticity and ethical practices. 
               Today, Rudraksha Wisdom continues to empower individuals on their spiritual journeys,
                offering genuine beads and fostering connections worldwide. 
                </p>
              <p className='text-lg text-gray-800'>
                Our journey has been guided by ancient wisdom and modern compassion, creating
                a bridge between timeless traditions and contemporary spiritual needs.
              </p>
            </div>
            <div className='relative h-96 rounded-lg overflow-hidden'>
              <Image
                src="/images/Story-of-Rudraksha.jpg"
                
                className="w-full h-full"
                alt="Our Story"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}