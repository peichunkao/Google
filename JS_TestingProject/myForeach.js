function myForEach(array, myfunction) {
  for(var i = 0; i < array.length; i++) {
    myfunction(array[i]);
  }
}

var test = [1,2,3,4,5,6,7]

function myfunction1(element) {
  console.log(element);
}

myForEach(test, myfunction1)


//this funciton invokes the anonymous function and print "123"
(function() {
  console.log("123");
})()

//this funciton shows the function itselt and never invoke the function
(function() {
  console.log("123");
})

//writing anonymous function in function
myForEach(test,function(){console.log("hi")});
myForEach(test,function(element){console.log(element)});

//add myForEach function in array object
Array.prototype.myForEach = function(myfunction) {
  for(var i = 0; i < this.length; i++) {
    myfunction(this[i]);
  }
};

//invoke myForEach with anonymous function
test.myForEach(function(element){
  console.log("I love " + element);
})