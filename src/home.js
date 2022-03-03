
function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const logoImage = document.createElement("img");
  logoImage.src = "./img/5.jpeg";
  logoImage.alt = "Icon";
  logoImage.classList.add('logo');

  home.appendChild(createParagraph("Best place to relax and enjoy the best sandwich."));
  home.appendChild(createParagraph("Doing it with passion since 2020!"));
  home.appendChild(logoImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;