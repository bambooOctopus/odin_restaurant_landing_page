const homeFunction = () => {
    const contentBody = document.getElementById("content-body");
    const homeDiv = document.createElement("div");
    homeDiv.id = "homeDiv";
    const homeCopy = document.createElement("p");
    homeCopy.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias nulla ipsum numquam dolores modi ut quisquam facilis! Explicabo voluptas temporibus eveniet saepe enim voluptatum fuga tempora tempore eius hic!"
    homeDiv.appendChild(homeCopy);
    contentBody.appendChild(homeDiv);
    
};

export {homeFunction};