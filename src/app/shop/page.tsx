import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
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

const faqs = [
  {
    question: "How fresh are your drinks and food items?",
    answer:
      "We prepare our herbal teas, smoothies, and other beverages fresh daily. All items are crafted with high-quality ingredients, ensuring every drink and dish is as fresh and flavourful as possible.",
  },
  {
    question: "What type of ingredients do you use?",
    answer:
      "Our offerings include organic and locally sourced ingredients whenever possible. From fresh fruits in our smoothies to premium teas and organic greens in our salads, we are committed to quality and sustainability.",
  },
  {
    question: "Do you offer gluten-free or vegan options?",
    answer:
      "Yes! We have a range of gluten-free and vegan-friendly options, including gluten-free pastries, vegan sandwiches, energy bowls, and vegan ice cream. We aim to cater to diverse dietary needs and preferences.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Absolutely! Many of our menu items can be customized to suit your tastes. For instance, you can add toppings to your acai bowls or request adjustments to your energy bowls and salads. Just let us know your preferences!",
  },
  {
    question: "Do you offer seasonal or limited-time items?",
    answer:
      "We occasionally introduce seasonal items or special blends, particularly for holidays and local festivals. Keep an eye on our menu for limited-time offerings featuring seasonal fruits or unique flavor combinations.",
  },
  {
    question: "Are your packaging and practices environmentally friendly?",
    answer:
      "We strive to be eco-conscious by using biodegradable and recyclable packaging wherever possible. Sustainability is important to us, and we continue to seek ways to reduce our environmental footprint.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us through the Contact Us page on our website or by emailing our support team directly. We’re here to help with any questions, concerns, or special requests!",
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

        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
