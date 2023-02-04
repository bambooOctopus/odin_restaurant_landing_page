import './style.css';
import KitchenOne from './kitchenOne.jpg';
import KitchenTwo from './kitchenTwo.jpg';

const kitchenOne = new Image();
const kitchenTwo = new Image();

// const footerDiv = document.createElement("div");


// kitchenOne.src = KitchenOne;
// kitchenOne.classList.add("kitchen-two");
// kitchenTwo.src = KitchenTwo;
// kitchenTwo.classList.add("kitchen-two");

// const infoDiv = document.createElement("div");
// infoDiv.classList.add("info-div");

// const titleText = document.createElement("h2");

// titleText.textContent = "restaurant title";
// titleText.style.color = "lightgray";

// infoDiv.appendChild(titleText);


// // let headerDiv = document.createElement("div");
// // headerDiv.classList.add("hello");
// // headerDiv.appendChild(myPhoto);

// // let kitchenDiv = document.getElementById("kitchenDiv");
// // kitchenDiv.appendChild(headerDiv);

// footerDiv.classList.add("footer-div");
// footerDiv.appendChild(kitchenOne);
// footerDiv.appendChild(infoDiv);    
// footerDiv.appendChild(kitchenTwo);        

// let contentDiv = document.getElementById("content");

// contentDiv.appendChild(footerDiv);

// // contentDiv.classList.add("hello");
// // contentDiv.appendChild(kitchenOne);
// // contentDiv.appendChild(infoDiv);
// // contentDiv.appendChild(kitchenTwo);




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

const contentFooter = document.createElement("div");
contentFooter.classList.add("content-footer");

// contentFooter.appendChild(KitchenOne);





contentDiv.appendChild(contentHeader);
contentDiv.appendChild(contentBody);
contentDiv.appendChild(contentFooter);



// const aboutLink = document.createElement("a");
// aboutLink.textContent = "about";
// const reserveLink = document.createElement("a");
// reserveLink.textContent = "reservations";
// headerLinks.appendChild(homeLink);
// headerLinks.appendChild(aboutLink);
// headerLinks.appendChild(reserveLink);

// contentHeader.appendChild(headerLinks);




// const contentBody = document.createElement("div");
// contentBody.classList.add("content-body");

// const contentFooter = document.createElement("div");
// contentFooter.classList.add("content-footer");


// contentDiv.appendChild(contentBody);
// contentDiv.appendChild(contentFooter);

