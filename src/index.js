import "./styles.css";
import loadHomePage from "./homepage.js";
import loadMenuPage from "./menu.js";
import loadContactsPage from "./contacts.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();
});

const menuTab = document.getElementById("menu-tab");
menuTab.addEventListener("click", () => {
  loadMenuPage();
});

const homeTab = document.getElementById("home-tab");
homeTab.addEventListener("click", () => {
  loadHomePage();
});

const contactsTab = document.getElementById("contacts-tab");
contactsTab.addEventListener("click", () => {
  loadContactsPage();
});
