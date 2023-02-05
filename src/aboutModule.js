import { clearContentBody } from "./clearContentBody";

const aboutFunction = () => {
    clearContentBody();
    const contentBody = document.getElementById("content-body");
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "aboutDiv";
    const aboutCopy = document.createElement("p");
    aboutCopy.textContent = "about content; the story of how the restuarant started and by whom, etc";
    aboutDiv.appendChild(aboutCopy);
    contentBody.appendChild(aboutDiv);
}

export {aboutFunction};