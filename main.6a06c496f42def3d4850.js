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
  var mapBox = document.getElementById("map-container");
  mapBox.classList.add("mapBox");
  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(mapBox);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n  --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: 'Cardo', serif;\n  font-size: 1.6rem;\n  color: var(--font-color);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size:cover;\n}\n\nheader {\n  font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1.2;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n\n/* Content */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n  margin-bottom: 1rem;\n  font-family: 'Cardo', serif;\n  font-size: 10rem;\n}\n\n.button-nav {\n  padding: 2rem;\n  font-size: 2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav::before{\n  content: '';\n  position: relative;\n  top:0;\n  display: block;\n  height: 3px;\n  width: 0%;\n  background-color: var(--font-color);\n  transition: all ease-out 250ms;\n}\n\n.button-nav:hover::before{\n  width: 100%;\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n.main {\n  max-width: 700px;\n  padding: 4rem;\n  margin: 60px 0;\n  font-size: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n/* Home page */\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.home p {\n  padding: 1rem;\n}\n\n.home img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 90%;\n}\n\n.logo{\n  display: inline-block;\n  width: 80px;\n  height: auto;\n  border-radius: 50%;\n\n}\n\n/* Menu page */\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n  \n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  width: 300px;\n  padding: 4rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n}\n\n.menu-item:hover {\n  background-color: var(--background-light-hover);\n}\n\n.menu-item img {\n  width: 40%;\n  display: block;\n  max-width: 100px;\n  height: auto;\n}\n\n.menu-item h2 {\n  padding: 2rem;\n}\n\n.menu-item p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n\n/* Contact page */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.contact p {\n  width: 100%;\n  padding: 1rem;\n}\n\n.contact p:nth-child(2){\n  margin-bottom: 10px;\n}\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.git {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #444;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media queries */\n\n@media (max-width: 700px) {\n  .home,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n\n  .menu {\n    grid-template-columns: 1fr;\n  }\n\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n\n  .home img {\n    width: 80%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=Special+Elite&display=swap');\n:root {\n  --font-color: #eee;\n  --font-color-dark: #aaa;\n  --border-color: #222;\n  --background-light: rgba(0, 0, 0, 0.6);\n  --background-light-hover: rgba(99, 99, 99, 0.4);\n  --background-dark: rgba(0, 0, 0, 0.9);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  line-height: 1.6;\n}\n\nbody {\n  font-family: 'Cardo', serif;\n  font-size: 1.6rem;\n  color: var(--font-color);\n  background-image: url('./img/background.jpg'); \n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size:cover;\n}\n\nheader {\n  font-size: 2.4rem;\n}\n\nh1,\nh2,\nh3 {\n  line-height: 1.2;\n}\n\na {\n  text-decoration: none;\n  color: var(--font-color);\n}\n\nimg {\n  display: block;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  color: inherit;\n  cursor: pointer;\n  border-style: none;\n  outline: none;\n}\n\n/* Content */\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\n/* Header */\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2rem;\n  background-color: var(--background-dark);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.restaurant-name {\n  margin-bottom: 1rem;\n  font-family: 'Cardo', serif;\n  font-size: 10rem;\n}\n\n.button-nav {\n  padding: 2rem;\n  font-size: 2rem;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n}\n\n.button-nav::before{\n  content: '';\n  position: relative;\n  top:0;\n  display: block;\n  height: 3px;\n  width: 0%;\n  background-color: var(--font-color);\n  transition: all ease-out 250ms;\n}\n\n.button-nav:hover::before{\n  width: 100%;\n}\n\n.button-nav:hover {\n  transform: translateY(-10%);\n}\n\n/* Main */\n\n.main {\n  max-width: 700px;\n  padding: 4rem;\n  margin: 60px 0;\n  font-size: 2rem;\n  background-color: var(--background-light);\n  border: 1px solid var(--border-color);\n}\n\n/* Home page */\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.home p {\n  padding: 1rem;\n}\n\n.home img {\n  width: 50%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  opacity: 90%;\n}\n\n.logo{\n  display: inline-block;\n  width: 80px;\n  height: auto;\n  border-radius: 50%;\n\n}\n\n/* Menu page */\n\n.menu {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 4rem;\n  animation: fadeIn 1.5s;\n  \n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  width: 300px;\n  padding: 4rem;\n  cursor: pointer;\n  background-color: var(--background-light);\n  transition: background-color 0.3s;\n}\n\n.menu-item:hover {\n  background-color: var(--background-light-hover);\n}\n\n.menu-item img {\n  width: 40%;\n  display: block;\n  max-width: 100px;\n  height: auto;\n}\n\n.menu-item h2 {\n  padding: 2rem;\n}\n\n.menu-item p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n\n/* Contact page */\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 525px;\n  width: 618px;\n  animation: fadeIn 1.5s;\n}\n\n.contact p {\n  width: 100%;\n  padding: 1rem;\n}\n\n.contact p:nth-child(2){\n  margin-bottom: 10px;\n}\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.git {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n/* Scrollbar */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #444;\n}\n\n/* Animations */\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Media queries */\n\n@media (max-width: 700px) {\n  .home,\n  .contact {\n    height: 100%;\n    width: 100%;\n  }\n\n  .menu {\n    grid-template-columns: 1fr;\n  }\n\n  .menu img {\n    width: 50%;\n  }\n}\n\n@media (max-width: 500px) {\n  html {\n    font-size: 57.5%;\n  }\n\n  .home img {\n    width: 80%;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUFBLHVEQUFpQjtBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb25saW5lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICfwn5OeIDEyMyA0NTYgNzg5JztcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ/Cfj6AgMTEgV2FsbCBTdCwgTmV3IFlvcmssIE5ZIDEwMDA1LCBVU0EnO1xuICBcbiAgY29uc3QgbWFwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXAtY29udGFpbmVyXCIpO1xuICBtYXBCb3guY2xhc3NMaXN0LmFkZChcIm1hcEJveFwiKTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChtYXBCb3gpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0XG5cbiIsIlxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9nb0ltYWdlLnNyYyA9IFwiLi9pbWcvNS5qcGVnXCI7XG4gIGxvZ29JbWFnZS5hbHQgPSBcIkljb25cIjtcbiAgbG9nb0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcblxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkJlc3QgcGxhY2UgdG8gcmVsYXggYW5kIGVuam95IHRoZSBiZXN0IHNhbmR3aWNoLlwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiRG9pbmcgaXQgd2l0aCBwYXNzaW9uIHNpbmNlIDIwMjAhXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIikpO1xuXG4gIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkTDtm5lclwiLFxuICAgICAgXCJUaGlubHkgc2xpY2VkIGNyaXNweSBiZWVmIGFuZCBsYW1iIGTDtm5lciBrZWJhYiwgdG9tYXRvLCBsZXR0dWNlLCBzcGljZWQgb25pb24sIHlvZ3VydCBzYXVjZTsgd3JhcHBlZCBpbiBhIFR1cmtpc2ggdG9ydGlsbGFcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiRmxhbmstU3RlYWtcIixcbiAgICAgIFwiTmV3IFlvcmsgU3RlYWsgU2FuZHdpY2ggd2l0aCBicmlvY2hlLCBjcmVhbWVkIHNwaW5hY2gsIHdoaXNrZXkgcGVwcGVyY29ybiBzYXVjZVwiXG4gICAgKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJHcmlsbGVkLUNoZWVzZVwiLFxuICAgICAgXCIgUGVwcGVyb25pLCBzYXV0w6llZCBtdXNocm9vbXMsIGdyaWxsZWQgb25pb25zLCBwcm92b2xvbmUsIGhvbWVtYWRlIG1hcmluYXJhIHNhdWNlIG9uIFRleGFzIHRvYXN0XCJcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIk1hZGFtZVwiLFxuICAgICAgXCJUb2FzdGVkIEZyZW5jaCBoYW0gYW5kIGNoZWVzZSB3aXRoIERpam9uIG11c3RhcmQgYW5kIEdydXnDqHJlIE1vcm5heSBvbiBjb3VudHJ5IHdoaXRlXCJcbiAgICApXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkN1YmFubyZNZWRpYW5vY2hlXCIsXG4gICAgICBcIlJvYXN0ZWQgcHVsbGVkIHBvcmssIGhhbSwgU3dpc3MgY2hlZXNlLCBwaWNrbGVzLCBtYXlvIGFuZCBtdXN0YXJkIG9uIHNlbWktc3dlZXQgYnJlYWRcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQkxUXCIsXG4gICAgICBcIkhvdXNlLWN1cmVkIHNtb2tlZCBzYWxtb24sIHNtb2tlZCBiYWNvbiwgcmVkIG9uaW9uLCBhcnVndWxhIGFuZCBCb3Vyc2luIG9uIHRvYXN0ZWQgZmxheHNlZWQgYnJlYWRcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ2VtaXRhJlRvcnRhXCIsXG4gICAgICBcIkNyZW1pbmksIHNoaWl0YWtlIGFuZCBveXN0ZXIgbXVzaHJvb21zLCBzbW9reSBnYXJsaWMgbW9qbywgcG9ibGFubyByYWphcywgZ29hdCBjaGVlc2UsIGJsYWNrIGJlYW5zLCB3aWxkIGFydWd1bGEsIGxpbWVcIlxuICAgIClcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUmV1YmVuXCIsXG4gICAgICBcIlBhc3RyYW1pLCBTd2lzcyBjaGVlc2UsIHNhdWVya3JhdXQsIFRob3VzYW5kIElzbGFuZCBkcmVzc2luZ1wiXG4gICAgKVxuICApO1xuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGAuL2ltZy9zYW5kd2ljaC8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgZm9vZEltYWdlLmFsdCA9IGAke25hbWV9YDtcbiAgZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJcbmltcG9ydCBzdHlsZSBmcm9tICcuL21haW4uY3NzJztcblxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiU3RvY2tzJ3MgU2FuZHdpY2hcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ3JlYXRlZCBieSBjaWdtYWlhbiDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW5cIjtcblxuICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZ2l0aHViSWNvbi5zcmM9ICdpbWcvZ2l0LWltZy5wbmcnO1xuICBnaXRodWJJY29uLmFsdCA9IFwiZ2l0LWltZ1wiO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2dpdCcpO1xuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5hdlwiKSk7XG4gIGxvYWRIb21lKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlO1xuXG4vKlxuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi9pbWcvYmFja2dyb3VuZC5qcGcnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGxldCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICBtLmFwcGVuZChwKTtcbiAgcC5hcHBlbmQoaW1nKTtcbiAgaW1nLnNyYyA9IGJhY2tncm91bmQ7XG4gIGltZy5hbHQgPSAnYmFja2dyb3VuZCc7XG4gIHJldHVybiBtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG5cblxuXG4qLyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogI2VlZTtcXG4gIC0tZm9udC1jb2xvci1kYXJrOiAjYWFhO1xcbiAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAtLWJhY2tncm91bmQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIC0tYmFja2dyb3VuZC1saWdodC1ob3ZlcjogcmdiYSg5OSwgOTksIDk5LCAwLjQpO1xcbiAgLS1iYWNrZ3JvdW5kLWRhcms6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdDYXJkbycsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG5pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDYXJkbycsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbi5idXR0b24tbmF2OjpiZWZvcmV7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDowO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDI1MG1zO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjpob3Zlcjo6YmVmb3Jle1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idXR0b24tbmF2OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgbWFyZ2luOiA2MHB4IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi8qIEhvbWUgcGFnZSAqL1xcblxcbi5ob21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MjVweDtcXG4gIHdpZHRoOiA2MThweDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxufVxcblxcbi5ob21lIHAge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhvbWUgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIG9wYWNpdHk6IDkwJTtcXG59XFxuXFxuLmxvZ297XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLyogTWVudSBwYWdlICovXFxuXFxuLm1lbnUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWdhcDogNHJlbTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XFxuICBcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodC1ob3Zlcik7XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gaDIge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBDb250YWN0IHBhZ2UgKi9cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTI1cHg7XFxuICB3aWR0aDogNjE4cHg7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4uY29udGFjdCBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QgcDpudGgtY2hpbGQoMil7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4uZ2l0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5cXG4vKiBTY3JvbGxiYXIgKi9cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5ob21lLFxcbiAgLmNvbnRhY3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1lbnUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIC5tZW51IGltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTcuNSU7XFxuICB9XFxuXFxuICAuaG9tZSBpbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsK0NBQStDO0VBQy9DLHFDQUFxQztBQUN2Qzs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIseURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7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O0FBQ0Y7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFOztJQUVFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiAjZWVlO1xcbiAgLS1mb250LWNvbG9yLWRhcms6ICNhYWE7XFxuICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gIC0tYmFja2dyb3VuZC1saWdodDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0LWhvdmVyOiByZ2JhKDk5LCA5OSwgOTksIDAuNCk7XFxuICAtLWJhY2tncm91bmQtZGFyazogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0NhcmRvJywgc2VyaWY7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvYmFja2dyb3VuZC5qcGcnKTsgXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQ29udGVudCAqL1xcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQ2FyZG8nLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxufVxcblxcbi5idXR0b24tbmF2IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjo6YmVmb3Jle1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6MDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAyNTBtcztcXG59XFxuXFxuLmJ1dHRvbi1uYXY6aG92ZXI6OmJlZm9yZXtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLW5hdjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIG1hcmdpbjogNjBweCAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2UgKi9cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogNTI1cHg7XFxuICB3aWR0aDogNjE4cHg7XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4uaG9tZSBwIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ob21lIGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBvcGFjaXR5OiA5MCU7XFxufVxcblxcbi5sb2dve1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxufVxcblxcbi8qIE1lbnUgcGFnZSAqL1xcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDRyZW07XFxuICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbiAgXFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQtaG92ZXIpO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICB3aWR0aDogNDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIGgyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogQ29udGFjdCBwYWdlICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUyNXB4O1xcbiAgd2lkdGg6IDYxOHB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcXG59XFxuXFxuLmNvbnRhY3QgcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb250YWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLmdpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNZWRpYSBxdWVyaWVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuaG9tZSxcXG4gIC5jb250YWN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICAubWVudSBpbWcge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU3LjUlO1xcbiAgfVxcblxcbiAgLmhvbWUgaW1nIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIlxuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGUuanNcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcblxuLypcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcydcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi93ZWJzaXRlJztcblxuXG5jb25zb2xlLmxvZygnYnVhbicpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb21wb25lbnQoKSk7XG4qLyJdLCJuYW1lcyI6WyJjcmVhdGVDb250YWN0IiwiY29udGFjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInBob25lTnVtYmVyIiwidGV4dENvbnRlbnQiLCJhZGRyZXNzIiwibWFwQm94IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImxvYWRDb250YWN0IiwibWFpbiIsImNyZWF0ZUhvbWUiLCJob21lIiwibG9nb0ltYWdlIiwic3JjIiwiYWx0IiwiY3JlYXRlUGFyYWdyYXBoIiwidGV4dCIsInBhcmFncmFwaCIsImxvYWRIb21lIiwiY3JlYXRlTWVudSIsIm1lbnUiLCJjcmVhdGVNZW51SXRlbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1lbnVJdGVtIiwiZm9vZE5hbWUiLCJmb29kRGVzY3JpcHRpb24iLCJmb29kSW1hZ2UiLCJ0b0xvd2VyQ2FzZSIsImxvYWRNZW51Iiwic3R5bGUiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJyZXN0YXVyYW50TmFtZSIsImNyZWF0ZU5hdiIsIm5hdiIsImhvbWVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwic2V0QWN0aXZlQnV0dG9uIiwibWVudUJ1dHRvbiIsImNvbnRhY3RCdXR0b24iLCJidXR0b24iLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJjcmVhdGVNYWluIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViTGluayIsImhyZWYiLCJnaXRodWJJY29uIiwiaW5pdGlhbGl6ZVdlYnNpdGUiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=