"use client";

import { useState, use } from "react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Star } from "lucide-react";
import { useCart } from "@/context/cart-context"; // Import useCart
import { toast } from "sonner"; // Import toast for notifications

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = ({ params }: Props) => {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart(); // Get addItem from cart context

  const [mainImage, setMainImage] = useState<string>(
    product?.images?.[0] || product?.image || "/images/1-mukhi.png"
  );

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <h1>Product Not Found</h1>
        <p>Could not find product with id: {id}</p>
      </div>
    );
  }

  const handleThumbnailClick = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || "/images/1-mukhi.png",
      quantity: 1,
    });

    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Main Image */}
            <Image
              src={mainImage || "/images/1-mukhi.png"}
              alt={product.name}
              width={600} // Specify the width
              height={600} // Specify the height
              className="w-full h-auto rounded-lg object-cover"
            />

            {/* Image Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex justify-start mt-4 space-x-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer flex-shrink-0 ${
                      mainImage === image ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-800 mb-4">{product.description}</p>
            <p className="text-xl font-semibold">
              Price: Rs {product.price.toFixed(2)}
            </p>
            {product.salePrice && (
              <p className="text-green-500 text-xl font-semibold">
                Sale Price: Rs {product.salePrice.toFixed(2)}
              </p>
            )}

            <div className="mt-3">
              <div className="flex flex-row gap-2 items-center">
                <p>Rating: </p>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    fill={index < Math.round(product.rating) ? "currentColor" : "none"}
                    className="text-yellow-500 w-5 h-5"
                  />
                ))}
              </div>
              <p>Stock: {product.stock}</p>
              <p>Category: {product.category}</p>
              {product.mukhi && <p>Mukhi: {product.mukhi}</p>}
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-underline mb-2">
                  Benefits
                </h2>
                <ul className="list-disc list-inside">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <Button size="lg" onClick={handleAddToCart}>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
