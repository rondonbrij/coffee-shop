import Image from "next/image";
// import { Button } from "@/components/ui/button";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Commitment to Sustainability
        </h1>

        <section className="mb-12">
          <p className="text-lg mb-4">
            At Earthy Vibes Coffee, sustainability isn&apos;t just a
            buzzword—it&apos;s the core of everything we do. We believe that
            great coffee should not come at the expense of our planet or the
            communities that grow our beans.
          </p>
          <p className="text-lg">
            Our commitment to sustainability extends from the farm to your cup,
            encompassing every step of our supply chain and operations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sustainable Sourcing</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/farm.jpg"
                alt="Sustainable Coffee Farm"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                We partner exclusively with farms that practice sustainable
                agriculture. This includes:
              </p>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Shade-grown coffee to preserve biodiversity</li>
                <li>Water conservation techniques</li>
                <li>Organic farming practices</li>
                <li>Fair wages and safe working conditions for farmers</li>
                <li>Community development programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Eco-Friendly Packaging
          </h2>
          <p className="text-lg mb-4">
            We&apos;ve made significant strides in reducing our environmental
            footprint through innovative packaging solutions:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>100% compostable coffee bags</li>
            <li>Recycled and recyclable shipping materials</li>
            <li>Minimalist design to reduce ink usage</li>
            <li>Bulk packaging options to minimize waste</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Carbon Neutral Roasting
          </h2>
          <p className="text-lg mb-4">
            Our roasting facility operates on 100% renewable energy, and we
            offset any remaining carbon emissions through verified carbon offset
            programs. This commitment ensures that our roasting process
            contributes to a healthier planet.
          </p>
          <p className="text-lg">
            By achieving carbon neutrality, we aim to set an example in the
            coffee industry and encourage others to adopt sustainable practices.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Community Initiatives</h2>
          <p className="text-lg mb-4">
            We believe in giving back to the communities that make our coffee
            possible:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Educational programs for coffee farmers</li>
            <li>Investments in local infrastructure</li>
            <li>Support for women-led coffee cooperatives</li>
            <li>Health and wellness initiatives</li>
            <li>Environmental conservation projects</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-lg">Cups Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-lg">Farming Partners</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-lg">Carbon Neutral</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">5K+</h3>
              <p className="text-lg">Community Projects</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
