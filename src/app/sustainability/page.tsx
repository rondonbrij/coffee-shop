import Image from "next/image";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Commitment to Sustainability
        </h1>

        <section className="mb-12">
          <p className="text-lg mb-4">
            At Earthy Vibes, sustainability is at the heart of everything we do.
            We believe that healthy, delicious food and drinks should not come
            at the expense of our planet or the communities that make it
            possible.
          </p>
          <p className="text-lg">
            Our commitment to sustainability spans from the farms where our
            ingredients are grown to your table, ensuring every step of our
            supply chain supports a healthier environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sustainable Sourcing</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/land.jpg"
                alt="Sustainable Cafe Farm"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                We partner exclusively with farms that prioritize sustainable
                practices for growing the ingredients that go into our
                offerings. This includes:
              </p>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Shade-grown herbs to preserve biodiversity</li>
                <li>Water conservation techniques in crop cultivation</li>
                <li>
                  Organic farming practices that reduce environmental impact
                </li>
                <li>Fair wages and safe working conditions for farmers</li>
                <li>
                  Community development programs that support local farming
                  communities
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Eco-Friendly Packaging
          </h2>
          <p className="text-lg mb-4">
            We are continuously working to reduce our environmental footprint
            through smart, eco-conscious packaging solutions:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>100% compostable packaging for our beverages and snacks</li>
            <li>Recycled and recyclable materials used for shipping</li>
            <li>Minimalist design to cut down on ink usage and waste</li>
            <li>
              Bulk packaging options to reduce single-use plastic and waste
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Carbon Neutral Roasting
          </h2>
          <p className="text-lg mb-4">
            We strive for a carbon-neutral operation. Our energy-efficient
            facilities run on renewable energy, and we offset any remaining
            emissions through verified carbon offset programs. This ensures that
            our products, from production to delivery, contribute to a cleaner
            planet.
          </p>
          <p className="text-lg">
            We hope to lead by example, showing that sustainable business
            practices are not just possible but essential for the future.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Community Initiatives</h2>
          <p className="text-lg mb-4">
            At Earthy Vibes, we believe in giving back to the communities that
            make our sustainable practices possible. Our initiatives include:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Educational programs for sustainable farming techniques</li>
            <li>
              Investments in local infrastructure to support farmers and
              communities
            </li>
            <li>Support for women-led cooperatives and local businesses</li>
            <li>
              Health and wellness programs to support our community’s well-being
            </li>
            <li>
              Environmental conservation projects that protect the planet for
              future generations
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-lg">Cups and Meals Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-lg">Sustainable Farming Partners</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-lg">Carbon Neutral Operations</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">5K+</h3>
              <p className="text-lg">Community Projects Supported</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
