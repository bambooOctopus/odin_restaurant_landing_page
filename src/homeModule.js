import { clearContentBody } from "./clearContentBody";
import KitchenOne from './kitchenOne.jpg';

const homeFunction = () => {
    const kitchenOne = new Image();
    kitchenOne.src = KitchenOne;
    kitchenOne.classList.add("kitchen-pic")
    clearContentBody();
    const contentBody = document.getElementById("content-body");
    const homeDiv = document.createElement("div");
    homeDiv.id = "homeDiv";
    const homeTitle = document.createElement("h2");
    homeTitle.textContent = "The French Laundry";    
    homeDiv.appendChild(homeTitle); 
    homeDiv.appendChild(kitchenOne);   
    contentBody.appendChild(homeDiv);
    
    
    
};

export {homeFunction};