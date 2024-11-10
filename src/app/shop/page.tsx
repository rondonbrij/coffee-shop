import Image from "next/image";
// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Mountain Mist Blend",
    description:
      "A smooth, balanced coffee with hints of chocolate and marshmallows.",
    price: 75.0,
    image: "/images/19.png",
  },
  {
    id: 2,
    name: "Holy Roast",
    description: "A strong punch of pure coffee to wake you in the morning.",
    price: 50.0,
    image: "/images/10.png",
  },
  {
    id: 3,
    name: "Dawn Of Heaven",
    description:
      "A bold and rich coffee with white chocolate and cinnamon flavors.",
    price: 60.0,
    image: "/images/11.png",
  },
  {
    id: 4,
    name: "IceCream Yummy",
    description: "A smooth creamy coffee with cold ice cream finish.",
    price: 80.0,
    image: "/images/20.png",
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* <Header /> */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Shop Our Coffee</h1>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">
                    {product.description}
                  </p>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
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

        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Subscription Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Weekly", "Bi-Weekly", "Monthly"].map((frequency) => (
              <Card key={frequency} className="bg-white">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {frequency} Subscription
                  </h3>
                  <p className="text-sm text-stone-600 mb-4">
                    Fresh coffee delivered to your doorstep every{" "}
                    {frequency.toLowerCase()}.
                  </p>
                  <p className="font-bold">
                    Starting at $12.99/
                    {frequency === "Monthly" ? "month" : "delivery"}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Subscribe & Save
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section> */}

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                How fresh is your coffee?
              </h3>
              <p>
                Our coffee is roasted in small batches and shipped within 24
                hours of roasting to ensure maximum freshness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Do you offer international shipping?
              </h3>
              <p>
                Currently, we only ship within the continental United States.
                We&apos;re working on expanding our shipping options.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Can I change or cancel my subscription?
              </h3>
              <p>
                Yes, you can manage your subscription easily through your
                account dashboard at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
