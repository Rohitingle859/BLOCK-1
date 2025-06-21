function personInfo() {
  console.log("Name:", this.name);
  console.log("Age:", this.age);
}


const person = {
  name: "Rohit",
  age: 25
};


personInfo.call(person);
