import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  // {
  //   question: "How do I contact customer support?",
  //   answer:
  //     "You can reach us through the Contact Us page on our website or by emailing our support team directly. We’re here to help with any questions, concerns, or special requests!",
  // },
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <main>
        <section className="relative h-[90vh] flex items-center justify-center">
          <Image
            src="/images/banner.png?height=1080&width=1920"
            alt="Cafe"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sip into Nature
            </h1>
            <p className="text-xl mb-8 mx-8">
              Experience drinks and food that are good for you and the planet.
            </p>
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Explore Our Offerings
            </Button>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Welcome to Earthy Vibes Cafe
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              We&apos;re committed to delivering the finest, sustainably sourced
              beverages and wholesome food that connect people with the Earth.
              Every sip and bite is a testament to our dedication to quality,
              health, and environmental stewardship.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 bg-stone-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product 1 */}
              <Card className="bg-white">
                <Image
                  src="/images/1.png?height=300&width=300"
                  alt="Cafe Product 1"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Peppermint Herbal Tea
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    A refreshing herbal tea with soothing peppermint, perfect
                    for relaxation.
                  </p>
                  <br />
                  <p className="font-bold">₱60.00</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Shop Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Product 2 */}
              <Card className="bg-white">
                <Image
                  src="/images/8.png?height=300&width=300"
                  alt="Cafe Product 2"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Golden Milk Latte
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    A warm, spiced latte made with turmeric and ginger, offering
                    a comforting and health-boosting experience.
                  </p>
                  <p className="font-bold">₱140.00</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Shop Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Product 3 */}
              <Card className="bg-white">
                <Image
                  src="/images/11.png?height=300&width=300"
                  alt="Cafe Product 3"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Vegan Sandwich</h3>
                  <p className="text-sm text-stone-600 mb-4">
                    A hearty sandwich packed with fresh veggies and plant-based
                    protein on artisanal bread.
                  </p>
                  <p className="font-bold">₱130.00</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Shop Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Product 4 */}
              <Card className="bg-white">
                <Image
                  src="/images/18.png?height=300&width=300"
                  alt="Cafe Product 4"
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Acai Bowl</h3>
                  <p className="text-sm text-stone-600 mb-4">
                    A vibrant bowl of blended acai topped with fresh fruits,
                    granola, and seeds for a nutritious boost.
                  </p>
                  <p className="font-bold">₱130.00</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Shop Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Our Commitment to Sustainability
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              At Earthy Vibes, we believe in nurturing both our customers and
              the planet. From farm to table, we ensure every step of our
              process is environmentally responsible and sustainable.
            </p>
            <Link
              href="/sustainability"
              className="text-green-700 hover:underline"
            >
              Learn more about our eco-friendly practices.
            </Link>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 bg-stone-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-10 text-center">
              What Our Customers Say
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="italic text-center text-lg">
                &quot;Earthy Vibes not only offers amazing drinks and meals but
                also makes me feel great knowing that I&apos;m supporting
                sustainable practices. Every time I enjoy their offerings, I
                feel connected to the Earth.&quot;
              </blockquote>
              <p className="text-center mt-4 font-semibold">
                - Ron A., Health & Sustainability Advocate
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 md:px-10">
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
    </div>
  );
}
