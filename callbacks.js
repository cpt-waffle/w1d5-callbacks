//Write a function that takes in an array, and a callback
// The function traverses the array backwards and uses the callback to print out each element in the list
function backward(array, cb) {
  for (var i = array.length - 1; i >= 0; i--) {
    cb(array[i]);
  }
}

let someArray = ['hello', 'lighthouse labs', 'and', 'world'];

backward(someArray, function(word) {
  console.log('the element is =>>',word);
});


////                                                                 ////
//                                                                     //
////////////////////////////////////////////////////////////////////////
//                                                                    //
////                                                                ////

// Time waiting!
function addTwo(number, cb) {
  let num = undefined;
  setTimeout(function(){
    // the only way to acess that value
    // at this point is using the callback
    num = number + 2
    console.log("3 second has passed!!!");
    console.log("number is now =>", num); // 6
    cb(num);
  },
  3000)
  //we return first because timeout hasnt finished doing it yet
  return num;
}


// undefined
let numberReturned = addTwo(6, function(number){
  console.log("line 26:", number)
})

//
console.log("Number has been returned from function:", numberReturned);
