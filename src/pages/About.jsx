
function About() {
  return (
    <>
      <section className="py-12">
        <div className="w-[90%] max-w-[1000px] mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">
            About Us
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to Shemiring Restaurant. We are dedicated to serving the most authentic and delicious dishes in the city. Our journey started with a passion for Filipino flavors and a commitment to quality.
            </p>

            <p>
              We believe that good food brings people together. That’s why every dish on our menu is crafted with care, tradition, and rich flavor—made to make every visit feel like home.
            </p>

            <p>
              Whether you are here for a quick meal, a special occasion, or simply to try something new, we invite you to dine with us. Come and experience the taste, the comfort, and the hospitality that make our restaurant special. One visit is never enough—you'll always want to come back for more!
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="site-container">
          <img
            src="/img/Kani.png"
            alt="Shemiring Restaurant"
            className="w-full h-[400px] object-cover rounded-[200px] shadow-md"
          />
        </div>
      </section>
    </>
  );
}

export default About;