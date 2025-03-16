"use client";
import Link from 'next/link';
import { Leaf, Facebook, Instagram, TwitterIcon, YoutubeIcon, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Footer = () => {
    const [logos] = useState([
        { id: 1, social: <Facebook /> },
        { id: 2, social: <Instagram /> },
        { id: 3, social: <TwitterIcon /> },
        { id: 4, social: <YoutubeIcon /> }
    ]);

    const [navFooter] = useState([
        { id: 1, name: 'Home' },
        { id: 2, name: 'Shop' },
        { id: 3, name: 'About' },
        { id: 4, name: 'Blog' },
        { id: 5, name: 'Contact' }
    ]);

    const [services] = useState([
        { id: 1, name: 'Shipping Policy' },
        { id: 2, name: 'Returns & Refunds' },
        { id: 3, name: 'FAQs' },
        { id: 4, name: 'Privacy Policy' },
        { id: 5, name: 'Terms & Conditions' }
    ]);

    return (
        <footer className="bg-gray-900 font-bold text-white py-4">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Brand and Description */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <Leaf className="h-6 w-6 text-white" />
                            <span className="ml-2 text-2xl font-bold tracking-wider text-white">
                                Rudraksha
                            </span>
                        </Link>
                        <p className="text-sm text-white max-w-xs">
                            Authentic, Energized, and Blessed Rudraksha Beads for Your Spiritual Journey. Sourced ethically from sacred forests.
                        </p>
                        <div className="flex flex-row space-x-4">
                            {logos.map((logo) => (
                                <Link key={logo.id} href="/" className="hover:text-green-500 transition-colors">
                                    {logo.social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 hover:text-green-500 transition-colors cursor-pointer">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {navFooter.map((item) => (
                                <li key={item.id}>
                                    <Link href="/" className="text-white hover:text-gray-600 transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 hover:text-green-500 transition-colors cursor-pointer">
                            Customer Service
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link href="/" className="text-white hover:text-gray-600 transition-colors text-sm">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-2 hover:text-green-500 transition-colors cursor-pointer">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-sm text-gray-400 mb-3">
                            Get updates on new products and spiritual insights.
                        </p>
                        <div className="flex space-x-2">
                            <div className="relative flex-grow max-w-xs">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                                <Input 
                type="email" 
                        placeholder="Your email" 
                            className="pl-10 py-2 text-sm w-full border rounded-md bg-gray-800 text-white"
                        />
                    </div>
                    <Button type="submit" size="lg" className="py-2 px-4 bg-white hover:bg-green-600 hover:text-white transition-colors cursor-pointer text-gray-900 rounded-md">
                     Subscribe
                     </Button>
                    </div>

                        </div>
                    </div>
                </div>
            

            {/* Copyright Section */}
            <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Rudraksha. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;



