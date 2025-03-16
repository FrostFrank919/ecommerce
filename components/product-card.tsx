"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context"; // Import useCart

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/images/1-mukhi.png",
      quantity: 1,
    });
  };

  return (
    <div
      className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0] || "/images/1-mukhi.png"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered && product.images.length > 1 ? "opacity-0" : "opacity-100"
            }`}
          />
          {product.images.length > 1 && (
            <Image
              src={product.images[1] || "/images/1-mukhi.png"}
              alt={`${product.name} - alternate view`}
              fill
              className={`object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </Button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <Link href={`/product/${product.id}`} className="hover:underline">
            <h3 className="font-medium text-lg">{product.name}</h3>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Rs {product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
