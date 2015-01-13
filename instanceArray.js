/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
users.push(tyler);

//Console.log all of Tylers information
console.log('Tyler\'s information is ');
console.log(users[0]);


  //code here
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
users.push(cahlan);

//console.log all of Cahlans information
console.log('Cahlan\'s information is ');
console.log(users[1]);


  //code here
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
users.push(lenny);

//console.log all of Lennys information
console.log('Lenny\'s information is ');
console.log(users[2]);


//Now create another instance of User using your own information and then add that to your users array.

  //code here
var fred = new User('Fredrick', 'fredrick.w.jones@gmail.com', 'thisIsAwesome');
users.push(fred);

console.log('All my users names are ');
console.log(users[3]);

//Now loop through your users Array and console.log every users name. 

  //code here
var each = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var userName = arr[i].name;
    callback(userName);
  };
};

each(users, function(userName){
  console.log(userName);
});


