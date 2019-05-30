//ways to define a functions

//Function Declaration

function hi() {
  console.log('Hi');
}

// Function Expression

let hello = function() {
  console.log('Hello');
}


// Function Call

hi();
hello();


///////////////////////////



//High order function
function highOrderFunction(callback) {
  console.log("I'm about to run the callback that function that was passed into me!")
  callback();


}

// For history: we used this function instead of defining it right inside of arguments.
// function someCallbackFunction() {
//   console.log('Im The callback function')
// }


//Time to call my function and pass in my callback
highOrderFunction(function() {
  console.log('Im The callback function')
});
