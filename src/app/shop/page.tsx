import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const products = [
  {
    id: 0,
    name: "Herbal infusions",
    price: 50.0,
    image: "/images/0.jpg",
  },
  {
    id: 1,
    name: "Peppermint Herbal Tea",
    price: 60.0,
    image: "/images/1.png",
  },
  {
    id: 2,
    name: "Fresh Fruit Smoothie",
    price: 120.0,
    image: "/images/2.png",
  },
  {
    id: 3,
    name: "Kombucha",
    price: 100.0,
    image: "/images/3.png",
  },
  {
    id: 4,
    name: "Fresh Orange Juice",
    price: 80.0,
    image: "/images/4.png",
  },
  {
    id: 5,
    name: "Coconut Water",
    price: 90.0,
    image: "/images/5.png",
  },
  {
    id: 6,
    name: "Chai Tea Latte",
    price: 110.0,
    image: "/images/6.png",
  },
  {
    id: 7,
    name: "Matcha Green Tea",
    price: 130.0,
    image: "/images/7.png",
  },
  {
    id: 8,
    name: "Golden Milk Latte",
    price: 140.0,
    image: "/images/8.png",
  },
  {
    id: 9,
    name: "Hibiscus Herbal Infusion",
    price: 70.0,
    image: "/images/9.png",
  },
  {
    id: 10,
    name: "Organic Salad",
    price: 150.0,
    image: "/images/10.png",
  },
  {
    id: 11,
    name: "Vegan Sandwich",
    price: 130.0,
    image: "/images/11.png",
  },
  {
    id: 12,
    name: "Gluten-Free Pastry",
    price: 90.0,
    image: "/images/12.png",
  },
  {
    id: 13,
    name: "Artisanal Bread",
    price: 70.0,
    image: "/images/13.png",
  },
  {
    id: 14,
    name: "Lentil Soup",
    price: 110.0,
    image: "/images/14.png",
  },
  {
    id: 15,
    name: "Vegetable Quiche",
    price: 140.0,
    image: "/images/15.png",
  },
  {
    id: 16,
    name: "Fruit and Cheese Platter",
    price: 160.0,
    image: "/images/16.png",
  },
  {
    id: 17,
    name: "Energy Bowl",
    price: 120.0,
    image: "/images/17.png",
  },
  {
    id: 18,
    name: "Acai Bowl",
    price: 130.0,
    image: "/images/18.png",
  },
  {
    id: 19,
    name: "Vegan Ice Cream",
    price: 100.0,
    image: "/images/19.png",
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* <Header /> */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Shop With Us</h1>
        <h2 className="text-2xl font-semibold mb-4">Drinks</h2>
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((product) => product.id >= 0 && product.id <= 9)
              .map((product) => (
                <Card key={product.id} className="bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="font-bold">₱{product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>

        <h2 className="text-2xl font-semibold mb-4">Foods</h2>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((product) => product.id >= 10 && product.id <= 19)
              .map((product) => (
                <Card key={product.id} className="bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="font-bold">₱{product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-green-700 hover:bg-green-800">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
