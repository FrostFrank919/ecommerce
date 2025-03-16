"use client";
import { Check, Globe, Leaf, Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const pathname = usePathname();
  const { cartItems } = useCart(); // Get cart items from context
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null); // State for selected language

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header on scroll up and hide on scroll down
      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY); // Update lastScrollY here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [navLinks] = useState([
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Shop", href: "/shop" },
    { id: 3, name: "About", href: "/about" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Contact", href: "/contact" },
  ]);

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Commenting out the line that closes the dropdown immediately
    // setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    showHeader && (
      <header
        className={`w-full py-4 transition-all duration-300 sticky top-0 z-50 shadow-md bg-white ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* {Logo} */}
            <Link href="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="ml-3 text-2xl font-bold tracking-wider text-primary">
                Rudraksha
              </span>
            </Link>

            {/* {Desktop Navigation} */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-xl font-medium transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* {Search, Users and Carts} */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search Products....."
                  className="w-[300px] h-[40px] pl-10 !text-xl !placeholder:text-sm rounded-full bg-gray-200 dark:bg-gray-800"
                />
              </div>
              <Link
                href="/auth/login"
                className="text-xl font-medium transition-colors hover:text-primary"
              >
                Sign In
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <ShoppingCart className="size-6" />
                  {totalItemsInCart > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-medium rounded-full px-2 py-0.5">
                      {totalItemsInCart}
                    </span>
                  )}
                </Button>
              </Link>
              <div className="relative">
                <Globe
                  className="size-6 text-gray-600 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    <div className="p-3 text-md font-semibold">Change Language</div>
                    <div className="flex flex-col p-1 gap-1">
                      <button 
                        onClick={() => handleLanguageChange('english')}
                        className={`flex flex-row items-center justify-between gap-3 hover:bg-gray-200 text-left p-2 rounded-md ${selectedLanguage === 'english' ? 'border border-green-500' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <Image 
                            src="/images/usa.png"
                            alt="USA"
                            width={24}
                            height={4}
                          />
                          English
                        </div>
                        {selectedLanguage === 'english' && (
                          <Check className="h-4 w-4 text-green-500" />
                        )}
                      </button>
                      <button 
                        onClick={() => handleLanguageChange('chinese')}
                        className={`flex flex-row items-center justify-between gap-3 hover:bg-gray-200 text-left p-2 rounded-md ${selectedLanguage === 'chinese' ? 'border border-green-500' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src="/images/china.png"
                            alt="china"
                            width={24}
                            height={4}
                          />
                          Chinese
                        </div>
                        {selectedLanguage === 'chinese' && (
                          <Check className="h-4 w-4 text-green-500" />
                        )}
                      </button>
                      <button 
                        onClick={() => handleLanguageChange('nepali')}
                        className={`flex flex-row items-center justify-between gap-3 hover:bg-gray-200 text-left p-2 rounded-md ${selectedLanguage === 'nepali' ? 'border border-green-500' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src="/images/nepal.png"
                            alt="nepal"
                            width={24}
                            height={4}
                          />
                          Nepali
                        </div>
                        {selectedLanguage === 'nepali' && (
                          <Check className="h-4 w-4 text-green-500" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* {Mobile Menu Button} */}
            <div className="flex items-center md:hidden">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <ShoppingCart className="size-6" />
                  {totalItemsInCart > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-medium rounded-full px-2 py-0.5">
                      {totalItemsInCart}
                    </span>
                  )}
                </Button>
              </Link>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-4 border-b">
                      <Link href="/" className="flex items-center">
                        <Leaf className="size-6 text-primary" />
                        <span className="ml-2 text-xl font-bold tracking-wider text-primary">
                          Rudraksha
                        </span>
                      </Link>
                    </div>
                    <div className="relative my-4">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full pl-8 rounded-full bg-gray-100 dark:bg-gray-800"
                      />
                    </div>
                    <nav className="flex flex-col space-y-4 mt-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.id}
                          href={link.href}
                          className="text-base font-medium transition-colors hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto border-t py-4">
                      <Button variant="outline" className="w-full mb-2">
                        <User className="size-6" />
                        Sign In
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    )
  );
}
