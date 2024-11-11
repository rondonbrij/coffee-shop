import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Earthy Vibes Cafe
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Jobert"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jobert</h3>
              <p className="text-green-700">Owner</p>
              <p className="mt-2 justify-normal text-justify">
                &quot;I&apos;m thrilled to share the journey of how I became the
                proud owner of Earthy Vibes Cafe. It all started with a passion
                for specialty cafe and a dream to create a cozy, eco-friendly
                haven where community and sustainability thrive. After years of
                perfecting my craft as a barista and cafe roaster, I took the
                leap and invested in a small cafe shop. Through hard work,
                dedication, and a commitment to sourcing high-quality,
                environmentally responsible beans, Earthy Vibes Cafe quickly
                gained a loyal following. As the business grew, so did my
                vision. I expanded operations, introduced innovative brewing
                methods, and fostered meaningful relationships with local
                artisans and suppliers. Today, Earthy Vibes Cafe is a beloved
                gathering place, serving as a testament to the power of passion,
                perseverance, and a genuine love for the art of cafe.&quot;
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Kenny"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Kenny Joy</h3>
              <p className="text-green-700">Manager</p>
              <p className="mt-2 justify-normal text-justify">
                &quot;I&apos;m thrilled to share my journey to becoming the
                manager of Earthy Vibes Cafe. Starting as a barista, I fell in
                love with the art of specialty cafe and the warm, eco-friendly
                atmosphere of our shop. Through dedication, hard work, and a
                passion for excellence, I quickly rose through the ranks. I
                expanded my skills in coffee roasting, brewing, and customer
                service, while fostering meaningful relationships with our loyal
                customers and local suppliers. As a leader, I empowered my team
                to provide exceptional experiences, drove innovative menu
                developments, and implemented sustainable practices. After 2
                Months of devotion, I was appointed manager, overseeing daily
                operations, staff development, and community engagement.
                I&apos;m proud to lead the Earthy Vibes Cafe team, nurturing a
                haven where every sip supports a greener future.&quot;
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Hannah"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Hannah</h3>
              <p className="text-green-700">Sales Manager</p>
              <p className="mt-2 justify-normal text-justify">
                &quot;My path to becoming Sales Manager at Earthy Vibes Cafe
                began with a love for coffee and a passion for people. As a
                barista, I honed my skills, learned from mentors, and soaked up
                industry knowledge. I expanded my role by taking on additional
                responsibilities, such as coffee roasting, brewing, and customer
                engagement. My success in these areas, combined with my
                leadership potential, led to my promotion. Today, as Sales
                Manager, I oversee sales strategy, team development, and
                customer relationships. I&apos;m committed to driving growth,
                innovation, and sustainability, while staying true to our core
                values. I&apos;m proud to lead an exceptional team and
                contribute to Earthy Vibes Cafe&apos;s continued success.&quot;
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <Image
                src="/images/default.jpg"
                alt="Jemelyn"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jemelyn</h3>
              <p className="text-green-700">Supervisor</p>
              <p className="mt-2 justify-normal text-justify">
                &quot;I&apos;m proud to have grown from a passionate barista to
                a dedicated supervisor at Earthy Vibes Cafe. Through hard work,
                dedication, and a love for specialty cafe, I demonstrated my
                leadership potential and commitment to excellence. I took on
                additional responsibilities, mentored team members, and
                consistently delivered exceptional customer experiences.
                Recognized for my skills and work ethic, I was promoted to
                supervisor, overseeing daily operations, staff development, and
                quality control. I&apos;m now honored to lead a talented team,
                fostering a culture of sustainability, innovation, and warm
                hospitality.&quot;
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
