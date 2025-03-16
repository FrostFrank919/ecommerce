"use client";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Trash2, AlertCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DialogBox from "@/components/DialogBox";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";

const CartPage = () => {
  const { cartItems, removeItem, updateQuantity, totalPrice } = useCart();
  // const [couponCode, setCouponCode] = useState("");
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);

  const handleConfirmRemove = () => {
    if (itemToRemove) removeItem(itemToRemove);
    setIsDialogVisible(false);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, Math.max(1, newQuantity));
  };

  const subtotal = totalPrice;
  const shipping = subtotal > 1000 ? 0 : 50; // Updated to Rs.1000 threshold
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <Button asChild>
              <Link href="/shop" className="text-xl">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cartItems.length})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 flex items-center space-x-4">
                    <div className="relative h-20 w-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <Link href={`/product/${item.id}`} className="font-medium hover:text-primary">
                        {item.name}
                      </Link>
                      <p className="text-gray-600">Rs. {item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="col-span-3 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-20 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="col-span-3 text-right">
                    <p className="font-medium">
                      Rs. {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 mt-1"
                      onClick={() => {
                        setItemToRemove(item.id);
                        setIsDialogVisible(true);
                      }}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
                <Separator className="mt-4" />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs. ${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-sm text-gray-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Free shipping on orders over Rs.1000
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>Rs. {total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full" asChild>
                <Link href="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <DialogBox
          isVisible={isDialogVisible}
          message="Are you sure you want to remove this item?"
          onClose={() => setIsDialogVisible(false)}
          onConfirm={handleConfirmRemove}
        />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;