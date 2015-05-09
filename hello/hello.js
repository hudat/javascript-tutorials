console.log("Hello");
//create a person object
//make person speak
//give person age, height, weight properties
var person = {};

person.speak = function (){
  console.log("I have " + this.wallet.money);
};

person.wallet = {};

person.wallet.addMoney = function(amount) {
  this.money = amount;
};

person.wallet.addMoney(1000000);

person.speak();
