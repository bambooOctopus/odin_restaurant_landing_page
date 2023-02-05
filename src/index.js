import './style.css';
import KitchenOne from './kitchenOne.jpg';
import KitchenTwo from './kitchenTwo.jpg';
import { homeFunction } from './homeModule';
import { aboutFunction } from './aboutModule';
import { reserveFunction } from './reserveModule';


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

//make home link
const homeAnchor = document.createElement("a");
const homeLink = document.createTextNode("home");
homeAnchor.appendChild(homeLink);
homeAnchor.title = "home";
homeAnchor.href = "#";
homeAnchor.id = "home-btn";

//make about linnk
const aboutAnchor = document.createElement("a");
const aboutLink = document.createTextNode("about");
aboutAnchor.appendChild(aboutLink);
aboutAnchor.title = "about";
aboutAnchor.href = "#";
aboutAnchor.id = "about-btn";

//make reserve link
const reserveAnchor = document.createElement("a");
const reserveLink = document.createTextNode("reserve");
reserveAnchor.appendChild(reserveLink);
reserveAnchor.title = "reservations";
reserveAnchor.href = "#";
reserveAnchor.id = "reserve-btn";

//add them to header-links div
headerLinks.appendChild(homeAnchor);
headerLinks.appendChild(aboutAnchor);
headerLinks.appendChild(reserveAnchor);
contentHeader.appendChild(headerLinks);


const contentBody = document.createElement("div");
contentBody.classList.add("content-body");
contentBody.id = "content-body";










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

homeFunction();

//event listeners
let homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", homeFunction);

let aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", aboutFunction);

let reserveBtn = document.getElementById("reserve-btn");
reserveBtn.addEventListener("click", reserveFunction);


    



//homeFunction();
//aboutFunction();
//reserveFunction();




