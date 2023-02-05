import { clearContentBody } from "./clearContentBody";
import { homeFunction } from "./homeModule";

const reserveFunction = () => {
    clearContentBody();
    const contentBody = document.getElementById("content-body");
    const reserveDiv = document.createElement("div");
    reserveDiv.id = "reserveDiv";
    

    //form goes here
    const formDiv = document.createElement("div");
    const form = document.createElement("form");
    form.id = "email-form"
    const formLabel = document.createElement("label");
    formLabel.textContent = "enter email for reservation";
    formLabel.classList.add("label")
    const textField = document.createElement("input");
    textField.classList.add("text-field")
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.id = "submit-btn";
    submitBtn.textContent = "send";

    form.appendChild(formLabel);
    form.appendChild(textField);
    form.appendChild(submitBtn);
    console.log(form);
    formDiv.appendChild(form);



    
    reserveDiv.appendChild(formDiv);
    contentBody.appendChild(reserveDiv);

    
    submitBtn.addEventListener("click", () => {
    alert("Thank you for your reservation request. You will receive an email shortly with more details.");
    homeFunction();
})
}

export {reserveFunction};