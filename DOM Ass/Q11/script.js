
document.getElementById("head").textContent = "Welcome to the DOM World!";

let paragraph = document.getElementsByTagName('p');
 for (let i = 0 ; i<paragraph; i++ ){
    paragraph[i].style.color = "blue"
 }

 let containerDiv = document.querySelector(".container");
    containerDiv.style.backgroundColor = "yellow";