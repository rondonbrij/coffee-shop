"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Minus } from "lucide-react";

// This would typically come from a context or state management solution
const cartItems = [
  {
    id: 1,
    name: "Herbal Infusion",
    price: 50,
    quantity: 2,
    image: "/images/0.jpg",
  },
  {
    id: 2,
    name: "Peppermint Herbal Tea",
    price: 60,
    quantity: 1,
    image: "/images/1.png",
  },
];

const orderedItems = [
  {
    id: 3,
    name: "Fresh Fruit Smoothie",
    price: 120,
    quantity: 1,
    image: "/images/2.png",
    status: "Processing",
  },
  {
    id: 4,
    name: "Kombucha",
    price: 100,
    quantity: 2,
    image: "/images/3.png",
    status: "Ready for Pickup",
  },
];

export default function OrdersPage() {
  const [cart, setCart] = useState(cartItems);
  const [orders, setOrders] = useState(orderedItems);

  const handleQuantityChange = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    // In a real application, this would send the order to the backend
    setOrders((prevOrders) => [...prevOrders, ...cart]);
    setCart([]);
  };

  const calculateTotal = (items: typeof cartItems) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderItems = (items: typeof cartItems, isCart: boolean) => (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="flex items-center p-4">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="rounded-md mr-4"
          />
          <div className="flex-grow">
            <h3 className="font-semibold">{item.name}</h3>
            <p>
              ₱{item.price.toFixed(2)} x {item.quantity}
            </p>
            {isCart && (
              <div className="flex items-center mt-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="ml-4"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            )}
            {!isCart && <p className="mt-2">Status: {item.status}</p>}
          </div>
          <p className="font-bold">
            ₱{(item.price * item.quantity).toFixed(2)}
          </p>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <Tabs defaultValue="cart">
        <TabsList>
          <TabsTrigger value="cart">Cart</TabsTrigger>
          <TabsTrigger value="orders">Ordered</TabsTrigger>
        </TabsList>
        <TabsContent value="cart">
          {cart.length > 0 ? (
            <>
              {renderItems(cart, true)}
              <div className="mt-6 text-right">
                <p className="text-xl font-bold">
                  Total: ₱{calculateTotal(cart).toFixed(2)}
                </p>
                <Button
                  className="mt-4 bg-green-700 hover:bg-green-800"
                  onClick={placeOrder}
                >
                  Place Order
                </Button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </TabsContent>
        <TabsContent value="orders">
          {orders.length > 0 ? (
            renderItems(orders, false)
          ) : (
            <p>You have no orders yet.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
