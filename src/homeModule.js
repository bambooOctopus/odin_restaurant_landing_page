import { clearContentBody } from "./clearContentBody";

const homeFunction = () => {
    clearContentBody();
    const contentBody = document.getElementById("content-body");
    const homeDiv = document.createElement("div");
    homeDiv.id = "homeDiv";
    const homeTitle = document.createElement("h2");
    homeTitle.textContent = "The French Laundry";    
    homeDiv.appendChild(homeTitle);    
    contentBody.appendChild(homeDiv);
    
    
    
};

export {homeFunction};