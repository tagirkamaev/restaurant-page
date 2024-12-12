const loadHomePage = () => {
  const content = document.getElementById("content");

  // create homepage container
  const homepage = document.createElement("div");
  homepage.id = "homepage";

  // adding image
  const restaurantPhoto = document.createElement("img");
  restaurantPhoto.id = "restaurant-image";
  restaurantPhoto.classList.add(
    "src=https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  restaurantPhoto.alt = "A beautiful view of our restaurant";
  homepage.appendChild(restaurantPhoto);

  // adding heading
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Culinary Paradise";
  homepage.appendChild(heading);

  // adding description
  const description = document.createElement("p");
  description.textContent =
    "At Culinary Paradise, we serve the finest dishes crafted with love and passion. Our chefs use only the freshest ingredients to create meals that will tantalize your taste buds and leave you craving for more. Experience the perfect blend of flavors, ambiance, and hospitality at our restaurant.";
  homepage.appendChild(description);

  content.appendChild(homepage);
};

export default loadHomePage;
