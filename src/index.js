import './style.css';
import KitchenOne from './kitchenOne.jpg';
import KitchenTwo from './kitchenTwo.jpg';

const kitchenOne = new Image();
const kitchenTwo = new Image();

kitchenOne.src = KitchenOne;
kitchenOne.classList.add("kitchen-pic");
kitchenTwo.src = KitchenTwo;
kitchenTwo.classList.add("kitchen-pic");

const contentDiv = document.getElementById("content");

const contentHeader = document.createElement("div");
contentHeader.classList.add("content-header");

const headerLinks = document.createElement("div");
headerLinks.classList.add("header-links");


const homeAnchor = document.createElement("a");
const homeLink = document.createTextNode("home");
homeAnchor.appendChild(homeLink);
homeAnchor.title = "home";
homeAnchor.href = "#";

headerLinks.appendChild(homeAnchor);

const aboutAnchor = document.createElement("a");
const aboutLink = document.createTextNode("about");
aboutAnchor.appendChild(aboutLink);
aboutAnchor.title = "about";
aboutAnchor.href = "#";

headerLinks.appendChild(aboutAnchor);


const reserveAnchor = document.createElement("a");
const reserveLink = document.createTextNode("reserve");
reserveAnchor.appendChild(reserveLink);
reserveAnchor.title = "reservations";
reserveAnchor.href = "#";

headerLinks.appendChild(reserveAnchor);
contentHeader.appendChild(headerLinks);

const contentBody = document.createElement("div");
contentBody.classList.add("content-body");

const bodyCopy = document.createElement("p");
bodyCopy.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias nulla ipsum numquam dolores modi ut quisquam facilis! Explicabo voluptas temporibus eveniet saepe enim voluptatum fuga tempora tempore eius hic!"
contentBody.appendChild(bodyCopy);

const contentFooter = document.createElement("div");
contentFooter.classList.add("content-footer");

const infoDiv = document.createElement("div");
infoDiv.classList.add("info-div");
infoDiv.textContent = "restaurant title";

const awardDiv = document.createElement("div");
awardDiv.classList.add("award-div");
awardDiv.textContent = "awards";


contentFooter.appendChild(infoDiv);
contentFooter.appendChild(kitchenOne);
contentFooter.appendChild(awardDiv);









contentDiv.appendChild(contentHeader);
contentDiv.appendChild(contentBody);
contentDiv.appendChild(contentFooter);