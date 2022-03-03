/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
  var contact = document.createElement('div');
  contact.classList.add('contact');
  var phoneNumber = document.createElement('p');
  phoneNumber.textContent = '📞 123 456 789';
  var address = document.createElement('p');
  address.textContent = '🏠 11 Wall St, New York, NY 10005, USA';
  var restaurantLocation = document.createElement('iframe');
  restaurantLocation.src = "https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA";
  restaurantLocation.width = "600";
  restaurantLocation.height = "450";
  restaurantLocation.loading = "lazy";
  restaurantLocation.allowfullscreen;
  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);
  return contact;
}

function loadContact() {
  var main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
  var home = document.createElement("div");
  home.classList.add("home");
  var logoImage = document.createElement("img");
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
  var paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  var menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(createMenuItem("Döner", "Thinly sliced crispy beef and lamb döner kebab, tomato, lettuce, spiced onion, yogurt sauce; wrapped in a Turkish tortilla"));
  menu.appendChild(createMenuItem("Flank-Steak", "New York Steak Sandwich with brioche, creamed spinach, whiskey peppercorn sauce"));
  menu.appendChild(createMenuItem("Grilled-Cheese", " Pepperoni, sautéed mushrooms, grilled onions, provolone, homemade marinara sauce on Texas toast"));
  menu.appendChild(createMenuItem("Madame", "Toasted French ham and cheese with Dijon mustard and Gruyère Mornay on country white"));
  menu.appendChild(createMenuItem("Cubano&Medianoche", "Roasted pulled pork, ham, Swiss cheese, pickles, mayo and mustard on semi-sweet bread"));
  menu.appendChild(createMenuItem("BLT", "House-cured smoked salmon, smoked bacon, red onion, arugula and Boursin on toasted flaxseed bread"));
  menu.appendChild(createMenuItem("Cemita&Torta", "Cremini, shiitake and oyster mushrooms, smoky garlic mojo, poblano rajas, goat cheese, black beans, wild arugula, lime"));
  menu.appendChild(createMenuItem("Reuben", "Pastrami, Swiss cheese, sauerkraut, Thousand Island dressing"));
  return menu;
}

function createMenuItem(name, description) {
  var menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  var foodName = document.createElement("h2");
  foodName.textContent = name;
  var foodDescription = document.createElement("p");
  foodDescription.textContent = description;
  var foodImage = document.createElement("img");
  foodImage.src = "./img/sandwich/".concat(name.toLowerCase(), ".png");
  foodImage.alt = "".concat(name);
  foodImage.classList.add("food");
  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);
  return menuItem;
}

function loadMenu() {
  var main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





function createHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  var restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Stocks's Sandwich";
  header.appendChild(restaurantName);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  var nav = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  var menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  var contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  return nav;
}

function setActiveButton(button) {
  var _this = this;

  var buttons = document.querySelectorAll(".button-nav");
  buttons.forEach(function (button) {
    if (button !== _this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function createMain() {
  var main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  var copyright = document.createElement("p");
  copyright.textContent = "Created by cigmaian \xA9 ".concat(new Date().getFullYear());
  var githubLink = document.createElement("a");
  githubLink.href = "https://github.com/cigmaian";
  var githubIcon = document.createElement("img");
  githubIcon.src = 'img/git-img.png';
  githubIcon.alt = "git-img";
  githubIcon.classList.add('git');
  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  return footer;
}

function initializeWebsite() {
  var content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveButton(document.querySelector(".button-nav"));
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);
/*
import background from './img/background.jpg';

function component() {
  let m = document.createElement('main');
  let p = document.createElement('p');
  let img = document.createElement('img');
  img.classList.add('background');
  m.append(p);
  p.append(img);
  img.src = background;
  img.alt = 'background';
  return m;
}

export default component;



*/

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=Special+Elite&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n  --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: 'Cardo', serif;\n  font-size: 1.6rem;\n  color: var(--font-color);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size:cover;\n}\n\nheader {\n  font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1.2;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n\n/* Content */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n  margin-bottom: 1rem;\n  font-family: 'Cardo', serif;\n  font-size: 10rem;\n}\n\n.button-nav {\n  padding: 2rem;\n  font-size: 2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav::before{\n  content: '';\n  position: relative;\n  top:0;\n  display: block;\n  height: 3px;\n  width: 0%;\n  background-color: var(--font-color);\n  transition: all ease-out 250ms;\n}\n\n.button-nav:hover::before{\n  width: 100%;\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n.main {\n  max-width: 700px;\n  padding: 4rem;\n  margin: 60px 0;\n  font-size: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n/* Home page */\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.home p {\n  padding: 1rem;\n}\n\n.home img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 90%;\n}\n\n.logo{\n  display: inline-block;\n  width: 80px;\n  height: auto;\n  border-radius: 50%;\n\n}\n\n/* Menu page */\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n  \n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  width: 300px;\n  padding: 4rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n}\n\n.menu-item:hover {\n  background-color: var(--background-light-hover);\n}\n\n.menu-item img {\n  width: 40%;\n  display: block;\n  max-width: 100px;\n  height: auto;\n}\n\n.menu-item h2 {\n  padding: 2rem;\n}\n\n.menu-item p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n\n/* Contact page */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.contact p {\n  width: 100%;\n  padding: 1rem;\n}\n\n.contact img {\n  max-height: 420px;\n  padding: 1rem;\n  opacity: 90%;\n}\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.git {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #444;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media queries */\n\n@media (max-width: 700px) {\n  .home,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n\n  .menu {\n    grid-template-columns: 1fr;\n  }\n\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n\n  .home img {\n    width: 80%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=Special+Elite&display=swap');\n:root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n  --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: 'Cardo', serif;\n  font-size: 1.6rem;\n  color: var(--font-color);\n  background-image: url('./img/background.jpg'); \n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size:cover;\n}\n\nheader {\n  font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1.2;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n\n/* Content */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n  margin-bottom: 1rem;\n  font-family: 'Cardo', serif;\n  font-size: 10rem;\n}\n\n.button-nav {\n  padding: 2rem;\n  font-size: 2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav::before{\n  content: '';\n  position: relative;\n  top:0;\n  display: block;\n  height: 3px;\n  width: 0%;\n  background-color: var(--font-color);\n  transition: all ease-out 250ms;\n}\n\n.button-nav:hover::before{\n  width: 100%;\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n.main {\n  max-width: 700px;\n  padding: 4rem;\n  margin: 60px 0;\n  font-size: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n/* Home page */\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.home p {\n  padding: 1rem;\n}\n\n.home img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 90%;\n}\n\n.logo{\n  display: inline-block;\n  width: 80px;\n  height: auto;\n  border-radius: 50%;\n\n}\n\n/* Menu page */\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n  \n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  width: 300px;\n  padding: 4rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n}\n\n.menu-item:hover {\n  background-color: var(--background-light-hover);\n}\n\n.menu-item img {\n  width: 40%;\n  display: block;\n  max-width: 100px;\n  height: auto;\n}\n\n.menu-item h2 {\n  padding: 2rem;\n}\n\n.menu-item p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n\n/* Contact page */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.contact p {\n  width: 100%;\n  padding: 1rem;\n}\n\n.contact img {\n  max-height: 420px;\n  padding: 1rem;\n  opacity: 90%;\n}\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.git {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #444;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media queries */\n\n@media (max-width: 700px) {\n  .home,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n\n  .menu {\n    grid-template-columns: 1fr;\n  }\n\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n\n  .home img {\n    width: 80%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");

(0,_website_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
/*
import style from './style.css'
import component from './website';


console.log('buan');

document.body.append(component());
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxuXG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJ/Cfk54gMTIzIDQ1NiA3ODknXG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ/Cfj6AgMTEgV2FsbCBTdCwgTmV3IFlvcmssIE5ZIDEwMDA1LCBVU0EnXG5cbiAgY29uc3QgcmVzdGF1cmFudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgcmVzdGF1cmFudExvY2F0aW9uLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP2tleT1BUElfS0VZJnE9U3BhY2UrTmVlZGxlLFNlYXR0bGUrV0FcIjtcbiAgcmVzdGF1cmFudExvY2F0aW9uLndpZHRoID0gXCI2MDBcIjtcbiAgcmVzdGF1cmFudExvY2F0aW9uLmhlaWdodCA9IFwiNDUwXCI7XG4gIHJlc3RhdXJhbnRMb2NhdGlvbi5sb2FkaW5nPVwibGF6eVwiO1xuICByZXN0YXVyYW50TG9jYXRpb24uYWxsb3dmdWxsc2NyZWVuO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcylcbiAgY29udGFjdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TG9jYXRpb24pXG5cbiAgcmV0dXJuIGNvbnRhY3Rcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuICBtYWluLnRleHRDb250ZW50ID0gJydcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0XG5cbiIsIlxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9nb0ltYWdlLnNyYyA9IFwiLi9pbWcvNS5qcGVnXCI7XG4gIGxvZ29JbWFnZS5hbHQgPSBcIkljb25cIjtcbiAgbG9nb0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkJlc3QgcGxhY2UgdG8gcmVsYXggYW5kIGVuam95IHRoZSBiZXN0IHNhbmR3aWNoLlwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiRG9pbmcgaXQgd2l0aCBwYXNzaW9uIHNpbmNlIDIwMjAhXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIikpO1xuXG4gIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkTDtm5lclwiLFxuICAgICAgXCJUaGlubHkgc2xpY2VkIGNyaXNweSBiZWVmIGFuZCBsYW1iIGTDtm5lciBrZWJhYiwgdG9tYXRvLCBsZXR0dWNlLCBzcGljZWQgb25pb24sIHlvZ3VydCBzYXVjZTsgd3JhcHBlZCBpbiBhIFR1cmtpc2ggdG9ydGlsbGFcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiRmxhbmstU3RlYWtcIixcbiAgICAgIFwiTmV3IFlvcmsgU3RlYWsgU2FuZHdpY2ggd2l0aCBicmlvY2hlLCBjcmVhbWVkIHNwaW5hY2gsIHdoaXNrZXkgcGVwcGVyY29ybiBzYXVjZVwiXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJHcmlsbGVkLUNoZWVzZVwiLFxuICAgICAgXCIgUGVwcGVyb25pLCBzYXV0w6llZCBtdXNocm9vbXMsIGdyaWxsZWQgb25pb25zLCBwcm92b2xvbmUsIGhvbWVtYWRlIG1hcmluYXJhIHNhdWNlIG9uIFRleGFzIHRvYXN0XCJcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIk1hZGFtZVwiLFxuICAgICAgXCJUb2FzdGVkIEZyZW5jaCBoYW0gYW5kIGNoZWVzZSB3aXRoIERpam9uIG11c3RhcmQgYW5kIEdydXnDqHJlIE1vcm5heSBvbiBjb3VudHJ5IHdoaXRlXCJcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkN1YmFubyZNZWRpYW5vY2hlXCIsXG4gICAgICBcIlJvYXN0ZWQgcHVsbGVkIHBvcmssIGhhbSwgU3dpc3MgY2hlZXNlLCBwaWNrbGVzLCBtYXlvIGFuZCBtdXN0YXJkIG9uIHNlbWktc3dlZXQgYnJlYWRcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQkxUXCIsXG4gICAgICBcIkhvdXNlLWN1cmVkIHNtb2tlZCBzYWxtb24sIHNtb2tlZCBiYWNvbiwgcmVkIG9uaW9uLCBhcnVndWxhIGFuZCBCb3Vyc2luIG9uIHRvYXN0ZWQgZmxheHNlZWQgYnJlYWRcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ2VtaXRhJlRvcnRhXCIsXG4gICAgICBcIkNyZW1pbmksIHNoaWl0YWtlIGFuZCBveXN0ZXIgbXVzaHJvb21zLCBzbW9reSBnYXJsaWMgbW9qbywgcG9ibGFubyByYWphcywgZ29hdCBjaGVlc2UsIGJsYWNrIGJlYW5zLCB3aWxkIGFydWd1bGEsIGxpbWVcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUmV1YmVuXCIsXG4gICAgICBcIlBhc3RyYW1pLCBTd2lzcyBjaGVlc2UsIHNhdWVya3JhdXQsIFRob3VzYW5kIElzbGFuZCBkcmVzc2luZ1wiXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGAuL2ltZy9zYW5kd2ljaC8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgZm9vZEltYWdlLmFsdCA9IGAke25hbWV9YDtcbiAgZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJcbmltcG9ydCBzdHlsZSBmcm9tICcuL21haW4uY3NzJztcblxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiU3RvY2tzJ3MgU2FuZHdpY2hcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ3JlYXRlZCBieSBjaWdtYWlhbiDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW5cIjtcblxuICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZ2l0aHViSWNvbi5zcmM9ICdpbWcvZ2l0LWltZy5wbmcnO1xuICBnaXRodWJJY29uLmFsdCA9IFwiZ2l0LWltZ1wiO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2dpdCcpO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5hdlwiKSk7XG4gIGxvYWRIb21lKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlO1xuXG4vKlxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9pbWcvYmFja2dyb3VuZC5qcGcnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGxldCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICBtLmFwcGVuZChwKTtcbiAgcC5hcHBlbmQoaW1nKTtcbiAgaW1nLnNyYyA9IGJhY2tncm91bmQ7XG4gIGltZy5hbHQgPSAnYmFja2dyb3VuZCc7XG4gIHJldHVybiBtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG5cblxuXG4qLyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogI2VlZTtcXG4gIC0tZm9udC1jb2xvci1kYXJrOiAjYWFhO1xcbiAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAtLWJhY2tncm91bmQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIC0tYmFja2dyb3VuZC1saWdodC1ob3ZlcjogcmdiYSg5OSwgOTksIDk5LCAwLjQpO1xcbiAgLS1iYWNrZ3JvdW5kLWRhcms6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdDYXJkbycsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDYXJkbycsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5idXR0b24tbmF2OjpiZWZvcmV7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDowO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDI1MG1zO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjpob3Zlcjo6YmVmb3Jle1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idXR0b24tbmF2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgbWFyZ2luOiA2MHB4IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi8qIEhvbWUgcGFnZSAqL1xcblxcbi5ob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MjVweDtcXG4gIHdpZHRoOiA2MThweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi5ob21lIHAge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhvbWUgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuXFxuLmxvZ297XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogNHJlbTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxuICBcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodC1ob3Zlcik7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gaDIge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBDb250YWN0IHBhZ2UgKi9cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTI1cHg7XFxuICB3aWR0aDogNjE4cHg7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4uY29udGFjdCBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QgaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLmdpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuaG9tZSxcXG4gIC5jb250YWN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICAubWVudSBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU3LjUlO1xcbiAgfVxcblxcbiAgLmhvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLCtDQUErQztFQUMvQyxxQ0FBcUM7QUFDdkM7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHlEQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsY0FBYztFQUNkLFdBQVc7RUFDWCxTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxxQ0FBcUM7QUFDdkM7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7QUFFcEI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFHQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUdBLGNBQWM7O0FBRWQ7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFOztJQUVFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiAjZWVlO1xcbiAgLS1mb250LWNvbG9yLWRhcms6ICNhYWE7XFxuICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gIC0tYmFja2dyb3VuZC1saWdodDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0LWhvdmVyOiByZ2JhKDk5LCA5OSwgOTksIDAuNCk7XFxuICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0NhcmRvJywgc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvYmFja2dyb3VuZC5qcGcnKTsgXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FyZG8nLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxufVxcblxcbi5idXR0b24tbmF2IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjo6YmVmb3Jle1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6MDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAyNTBtcztcXG59XFxuXFxuLmJ1dHRvbi1uYXY6aG92ZXI6OmJlZm9yZXtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIG1hcmdpbjogNjBweCAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2UgKi9cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTI1cHg7XFxuICB3aWR0aDogNjE4cHg7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4uaG9tZSBwIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ob21lIGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi5sb2dve1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcbi8qIE1lbnUgcGFnZSAqL1xcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDRyZW07XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbiAgXFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQtaG92ZXIpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIGgyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUyNXB4O1xcbiAgd2lkdGg6IDYxOHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXG59XFxuXFxuLmNvbnRhY3QgcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb250YWN0IGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0MjBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5naXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcblxcbi8qIFNjcm9sbGJhciAqL1xcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxufVxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogTWVkaWEgcXVlcmllcyAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmhvbWUsXFxuICAuY29udGFjdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubWVudSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgLm1lbnUgaW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1Ny41JTtcXG4gIH1cXG5cXG4gIC5ob21lIGltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJcbmltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlLmpzXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG5cbi8qXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vd2Vic2l0ZSc7XG5cblxuY29uc29sZS5sb2coJ2J1YW4nKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29tcG9uZW50KCkpO1xuKi8iXSwibmFtZXMiOlsiY3JlYXRlQ29udGFjdCIsImNvbnRhY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwaG9uZU51bWJlciIsInRleHRDb250ZW50IiwiYWRkcmVzcyIsInJlc3RhdXJhbnRMb2NhdGlvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibG9hZGluZyIsImFsbG93ZnVsbHNjcmVlbiIsImFwcGVuZENoaWxkIiwibG9hZENvbnRhY3QiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVIb21lIiwiaG9tZSIsImxvZ29JbWFnZSIsImFsdCIsImNyZWF0ZVBhcmFncmFwaCIsInRleHQiLCJwYXJhZ3JhcGgiLCJsb2FkSG9tZSIsImNyZWF0ZU1lbnUiLCJtZW51IiwiY3JlYXRlTWVudUl0ZW0iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtZW51SXRlbSIsImZvb2ROYW1lIiwiZm9vZERlc2NyaXB0aW9uIiwiZm9vZEltYWdlIiwidG9Mb3dlckNhc2UiLCJsb2FkTWVudSIsInN0eWxlIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwicmVzdGF1cmFudE5hbWUiLCJjcmVhdGVOYXYiLCJuYXYiLCJob21lQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsInNldEFjdGl2ZUJ1dHRvbiIsIm1lbnVCdXR0b24iLCJjb250YWN0QnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVtb3ZlIiwiY3JlYXRlTWFpbiIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdpdGh1YkxpbmsiLCJocmVmIiwiZ2l0aHViSWNvbiIsImluaXRpYWxpemVXZWJzaXRlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9