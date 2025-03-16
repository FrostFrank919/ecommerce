import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
    <Header />
    <section className='flex flex-col'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full overflow-hidden'>
        <div className="absolute inset-0">
          <Image
            src="/images/Asthetic-contact.png"
            alt="Contact Us"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className='container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white'>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Connect With Us
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">

            We&apos;re here to help you on your spiritual journey
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white p-8 rounded-xl shadow-lg'>
              <h2 className='text-3xl font-bold mb-8 flex items-center gap-2'>
                <Send className='text-primary' />
                Send a Message
              </h2>
              <form className='space-y-6'>
                <div>
                  <label className='block text-lg mb-2'>Your Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your name"
                    className='h-12 text-lg'
                  />
                </div>
                <div>
                  <label className='block text-lg mb-2'>Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className='h-12 text-lg'
                  />
                </div>
                <div>
                  <label className='block text-lg mb-2'>Message</label>
                  <Textarea 
                    placeholder="Type your message here..."
                    className='h-32 text-lg'
                  />
                </div>
                <Button 
                  type="submit"
                  className='w-full bg-primary hover:bg-primary/90 h-12 text-lg'
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className='space-y-8'>
              <div className='bg-white p-8 rounded-xl shadow-lg'>
                <h2 className='text-3xl font-bold mb-8 flex items-center gap-2'>
                  <MapPin className='text-primary' />
                  Our Location
                </h2>
                <div className='space-y-4'>
                  <p className='text-lg'>Click Point Innovations Pvt. Ltd.</p>
                  <p className='text-gray-600'>Mid-Baneshwor<br/>Kathmandu, Nepal</p>
                  <div className='aspect-video rounded-lg overflow-hidden'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2552!2d85.3365832!3d27.7125449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197b40492713%3A0x8337c2e6d49f6a04!2sClick%20Point%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1718962000000"
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    title="Click Point Innovations Location"
                    
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Phone className='text-primary' />
                    <h3 className='text-xl font-semibold'>Phone</h3>
                  </div>
                  <p className='text-gray-600'>+91 12345 67890</p>
                  <p className='text-gray-600'>+91 98765 43210</p>
                </div>

                <div className='bg-white p-6 rounded-xl shadow-lg'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Mail className='text-primary' />
                    <h3 className='text-xl font-semibold'>Email</h3>
                  </div>
                  <p className='text-gray-600'>contact@rudraksha.com</p>
                  <p className='text-gray-600'>support@rudraksha.com</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-lg'>
                <div className='flex items-center gap-3 mb-4'>
                  <Clock className='text-primary' />
                  <h3 className='text-xl font-semibold'>Working Hours</h3>
                </div>
                <p className='text-gray-600'>Monday - Saturday: 9 AM - 7 PM</p>
                <p className='text-gray-600'>Sunday: 10 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        
    </section>
    <Footer />
    </>
  );
}