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
            Delivering the finest, sustainably sourced coffee that connects
            people with the Earth.
          </p>
          <p className="text-lg">
            At Earthy Vibes Coffee, we believe that great coffee can be a force
            for good. Our mission is to provide coffee lovers with exceptional
            brews while promoting sustainable practices and supporting the
            communities that grow our beans.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a world where every cup of coffee tells a story of
            sustainability, fair trade, and environmental stewardship.
            We&apos;re committed to leading the coffee industry towards more
            eco-friendly practices, one bean at a time.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg mb-4">
            Founded in 2015 by a group of passionate coffee enthusiasts and
            environmental advocates, Earthy Vibes Coffee started as a small café
            in Bean Town. Our commitment to quality and sustainability quickly
            gained us a loyal following, allowing us to expand our reach and
            impact.
          </p>
          <p className="text-lg">
            Today, we source beans from eco-conscious farms across the globe,
            roast them to perfection, and deliver them to coffee lovers who
            share our values.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/images/1.png"
                alt="Ron Agum"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ron Agum</h3>
              <p className="text-green-700">Co-Founder</p>
              <p className="mt-2">
                Passionate about sustainable coffee and making a positive impact
                on the environment.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="/images/1.png"
                alt="Ron Agum"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ron Agum</h3>
              <p className="text-green-700">Co-Founder</p>
              <p className="mt-2">
                Passionate about sustainable coffee and making a positive impact
                on the environment.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/images/1.png"
                alt="Ron Agum"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ron Agum</h3>
              <p className="text-green-700">Co-Founder</p>
              <p className="mt-2">
                Passionate about sustainable coffee and making a positive impact
                on the environment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Sustainability in every step of our process</li>
            <li>Uncompromising quality in our products</li>
            <li>Transparency in our sourcing and operations</li>
            <li>Fair trade and ethical partnerships</li>
            <li>Community engagement and support</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
