const loadMenuPage = () => {
  // create a structure for menu data
  const menuData = {
    salads: [
      {
        name: "Garden Bliss",
        description:
          "Fresh spinach, arugula, and romaine leaves with crunchy nuts, honey-mustard dressing, and creamy avocado.",
        price: "$9.99",
      },
      {
        name: "Mediterranean Delight",
        description:
          "Classic Greek salad with Kalamata olives, feta cheese, cherry tomatoes, and a drizzle of olive oil.",
        price: "$11.99",
      },
      {
        name: "Exotic Mango Tango",
        description:
          "A tropical mix of mango, shrimp, cucumber, and a refreshing lime dressing.",
        price: "$13.99",
      },
      {
        name: "Citrus Harmony",
        description:
          "Orange, grapefruit, tender greens, and a light ginger-mint sauce.",
        price: "$10.99",
      },
    ],
    mainCourse: [
      {
        name: "Herb-Crusted Salmon",
        description:
          "Pan-seared salmon topped with a herb crust, served with asparagus and a lemon butter sauce.",
        price: "$21.99",
      },
      {
        name: "Tuscan Chicken",
        description:
          "Grilled chicken breast in a creamy sun-dried tomato and basil sauce, served with mashed potatoes.",
        price: "$19.99",
      },
      {
        name: "Truffle Mushroom Risotto",
        description:
          "Creamy Arborio rice with wild mushrooms, Parmesan, and a hint of truffle oil.",
        price: "$17.99",
      },
      {
        name: "Filet Mignon Supreme",
        description:
          "Tender beef filet grilled to perfection, served with a red wine reduction and roasted vegetables.",
        price: "$29.99",
      },
    ],
    deserts: [
      {
        name: "Chocolate Lava Cake",
        description:
          "A rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        price: "$8.99",
      },
      {
        name: "Tiramisu Temptation",
        description:
          "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        price: "$7.99",
      },
      {
        name: "Berry Bliss Cheesecake",
        description:
          "New York-style cheesecake topped with fresh mixed berries and a berry glaze.",
        price: "$9.99",
      },
      {
        name: "Coconut Panna Cotta",
        description:
          "Silky panna cotta infused with coconut, topped with a tropical fruit compote.",
        price: "$8.49",
      },
    ],
    beverages: [
      {
        name: "Classic Mojito",
        description:
          "A refreshing blend of mint, lime, sugar, and soda water, served over ice.",
        price: "$7.99",
      },
      {
        name: "Berry Lemonade",
        description: "Homemade lemonade infused with fresh mixed berries.",
        price: "$5.99",
      },
      {
        name: "Espresso Martini",
        description:
          "A bold mix of espresso, vodka, and coffee liqueur, served chilled.",
        price: "$9.99",
      },
      {
        name: "Tropical Paradise Smoothie",
        description:
          "A creamy smoothie with pineapple, mango, and coconut milk.",
        price: "$6.99",
      },
    ],
  };

  // create variable for div content
  const content = document.getElementById("content");

  // clear the content div
  content.innerHTML = "";

  // creating menu container
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // iterating menu categories
  for (const [category, items] of Object.entries(menuData)) {
    const section = document.createElement("div");
    section.classList.add("menu-section");

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);
    section.appendChild(sectionTitle);

    // adding items from categories
    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      menuItem.appendChild(itemName);

      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      menuItem.appendChild(itemDescription);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = item.price;
      itemPrice.classList.add("price");
      menuItem.appendChild(itemPrice);

      section.appendChild(menuItem);
    });

    menuContainer.appendChild(section);
  }
  content.appendChild(menuContainer);
};

export default loadMenuPage;
