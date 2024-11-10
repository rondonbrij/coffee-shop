import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Earthy Vibes Coffee
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Delivering the finest, sustainably sourced beverages and foods that
            connect people with the Earth.
          </p>
          <p className="text-lg">
            At Earthy Vibes, we believe that great food and drinks can be a
            force for good. Our mission is to provide our customers with
            exceptional, healthy offerings, while promoting sustainable
            practices and supporting the communities that grow our ingredients.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a world where every meal, drink, and snack tells a story
            of sustainability, fair trade, and environmental stewardship.
            We&apos;re committed to leading the food and beverage industry
            toward more eco-friendly practices, one ingredient at a time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg mb-4">
            Founded in 2023 by a group of passionate food and sustainability
            advocates, Earthy Vibes started as a small café in Puerto Princesa,
            where we focused on offering fresh, wholesome, and sustainable food
            and drinks. Our commitment to quality and sustainability quickly
            gained us a loyal following, allowing us to expand our reach and
            impact.
          </p>
          <p className="text-lg">
            Today, we source ingredients from eco-conscious farms and producers,
            carefully crafting them into the wholesome products we offer to
            customers who share our values.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Ron Agum"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ron Agum</h3>
              <p className="text-green-700">Co-Founder</p>
              <p className="mt-2">
                Passionate about sustainable living and making a positive impact
                on the environment. Ron has dedicated his career to connecting
                people with healthy, sustainable food and drink options.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Ron Agum"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ron Agum</h3>
              <p className="text-green-700">Co-Founder</p>
              <p className="mt-2">
                A nutritionist with a passion for plant-based food, Jane ensures
                that every dish and drink we offer is not only environmentally
                friendly but also nourishing for the body.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Ron Agum"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ron Agum</h3>
              <p className="text-green-700">Co-Founder</p>
              <p className="mt-2">
                Passionate about sustainable drinks and making a positive impact
                on the environment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>
              Sustainability in every step of our process, from ingredient
              sourcing to packaging.
            </li>
            <li>
              Uncompromising quality in our products, ensuring that every item
              we serve is fresh and healthy.
            </li>
            <li>
              Uncompromising quality in our products, ensuring that every item
              we serve is fresh and healthy.
            </li>
            <li>
              Fair trade and ethical partnerships with farmers and suppliers who
              share our values.
            </li>
            <li>
              Community engagement and support, fostering meaningful
              relationships with the communities we serve.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
