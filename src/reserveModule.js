import { clearContentBody } from "./clearContentBody";

const reserveFunction = () => {
    clearContentBody();
    const contentBody = document.getElementById("content-body");
    const reserveDiv = document.createElement("div");
    reserveDiv.id = "reserveDiv";
    const reserveCopy = document.createElement("p");
    reserveCopy.textContent = "this is a reserve form asking for email";
    reserveDiv.appendChild(reserveCopy);
    contentBody.appendChild(reserveDiv);
}

export {reserveFunction};