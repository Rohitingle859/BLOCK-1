let age = 25; 


function displayAge() {
    console.log("Age inside displayAge:", age);
}


function changeAge() {
    age = 30; 
    console.log("Age inside changeAge after update:", age);
}


displayAge();    
changeAge();     
displayAge();    