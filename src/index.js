import "./styles.css"
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { contact } from "./contact.js"

Home();

const Hpage = document.querySelector(".Hpage");
Hpage.addEventListener("click" , Home);

const Mpage = document.querySelector(".Mpage");
Mpage.addEventListener("click" , Menu);

const Cpage = document.querySelector(".Cpage");
Cpage.addEventListener("click" , contact);