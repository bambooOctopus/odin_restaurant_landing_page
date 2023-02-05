import { clearContentBody } from "./clearContentBody";

const aboutFunction = () => {
    clearContentBody();
    const contentBody = document.getElementById("content-body");
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "aboutDiv";
    const aboutCopy = document.createElement("p");
    aboutCopy.textContent = "The French Laundry is a three-Michelin star French and Californian cuisine restaurant located in Yountville, California, in the Napa Valley. Sally Schmitt opened The French Laundry in 1978 and designed her menus around local, seasonal ingredients; she was a visionary chef and pioneer of California cuisine. Since 1994 the chef and owner of The French Laundry is Thomas Keller. The restaurant building dates from 1900 and was added to the National Register of Historic Places in 1978.";
    aboutDiv.appendChild(aboutCopy);
    contentBody.appendChild(aboutDiv);
}

export {aboutFunction};