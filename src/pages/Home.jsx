function Home() {
  const testimonials = [
    {
      message:"The best dining experience I've ever had!",
      name: "- Gordon Ramsey",
    },
    {
      message: "Amazing food and excellent service.",
      name: "- Muhammad Zhakariya",
    },
    {
      message: "The service is faster.",
      name: "- Judy Ann Sta. Maria-Lacson",
    },
    {
      message: "The worker here is friendly.",
      name: "- Nana De Coco",
    },
    {
      message: "The taste is so Filipino.",
      name: "- Cheyk Yark",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24 text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105 blur-md"
          style={{
            backgroundImage: "url('/img/background.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-5xl">
            Welcome to Shemiring Restaurant
          </h1>

          <p className="text-lg">
            Experience the best cuisine in the city. Enjoy our signature dishes and cozy ambiance.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-blue-700">
            Testimonials
          </h2>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 bg-gray-200 border-4 border-blue-300 rounded-2xl shadow-sm"
              >
                <p className="italic">
                  "{testimonial.message}"
                </p>

                <span className="block mt-2 font-bold text-right">
                  {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;