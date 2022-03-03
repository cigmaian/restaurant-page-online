function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Döner",
      "Thinly sliced crispy beef and lamb döner kebab, tomato, lettuce, spiced onion, yogurt sauce; wrapped in a Turkish tortilla"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Flank-Steak",
      "New York Steak Sandwich with brioche, creamed spinach, whiskey peppercorn sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Grilled-Cheese",
      " Pepperoni, sautéed mushrooms, grilled onions, provolone, homemade marinara sauce on Texas toast"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Madame",
      "Toasted French ham and cheese with Dijon mustard and Gruyère Mornay on country white"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cubano&Medianoche",
      "Roasted pulled pork, ham, Swiss cheese, pickles, mayo and mustard on semi-sweet bread"
    )
  );
  menu.appendChild(
    createMenuItem(
      "BLT",
      "House-cured smoked salmon, smoked bacon, red onion, arugula and Boursin on toasted flaxseed bread"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cemita&Torta",
      "Cremini, shiitake and oyster mushrooms, smoky garlic mojo, poblano rajas, goat cheese, black beans, wild arugula, lime"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Reuben",
      "Pastrami, Swiss cheese, sauerkraut, Thousand Island dressing"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `./img/sandwich/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;
  foodImage.classList.add("food");

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;