const menuSections = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Indian Thali / Feast Spread",
        price: 180,
        image: "/img/background.jpg",
        description:
          "An Indian thali platter featuring fried bread (poori/bhatura), vegetable curries, dal, spiced rice, samosas with dipping sauce, and side condiments.",
      },
      {
        name: "Classic Cheeseburger",
        price: 120,
        image: "/img/burger.jpg",
        description:
          "Golden-brown, crispy deep-fried chicken drumsticks and thighs with a crunchy outer breading.",
      },
      {
        name: "Crispy Fried Chicken",
        price: 110,
        image: "/img/chiken crispy juicy.jpg",
        description:
          "A juicy beef burger served on a toasted sesame seed bun with melted cheddar cheese, fresh lettuce, and ripe tomato slices.",
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Iced Coffee / Iced Latte",
        price: 100,
        image: "/img/Ice Coffe.jpg",
        description:
          "A tall glass of iced espresso blended with cold milk, showing marbled layers over ice.",
      },
      {
        name: "Classic Glass Halo-Halo",
        price: 100,
        image: "/img/Halo-Halo.jpg",
        description:
          "Traditional Filipino shaved ice dessert served in tall glasses, layered with sweetened beans, jelly, shaved ice, milk, and topped with ube ice cream.",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Leche Flan",
        price: 90,
        image: "/img/Leche Flan.jpg",
        description: "Creamy custard pudding topped with a caramel sauce.",
      },
      {
        name: "Lumpia Shanghai",
        price: 30,
        image: "/img/lumpia.jpg",
        description:
          "Deep-fried golden crispy spring rolls filled with minced meat, served with sweet chili dipping sauce.",
      },
    ],
  },
];

function Menu() {
  return (
    <section className="py-12">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">
          Our Menu
        </h1>
        {menuSections.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="pb-2 mb-5 text-2xl font-bold text-blue-900 border-b-2 border-red-900">
              {section.title}
            </h2>
            <ul className="space-y-4 list-none">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col p-4 bg-white rounded-lg shadow-md md:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-[100px] h-[200px] md:h-[100px] object-cover rounded-md md:mb-0 md:mr-4 flex-shrink-0"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between py-2">
                      <span className="font-bold">{item.name}</span>
                      <span className="font-semibold text-blue-900 whitespace-nowrap">
                        PHP {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
