function person(name,age) {
  this.name = name;
  this.age = age;
};

var peter = new person("Jack",29);

var movieDB = [
  {
    movie:"Frozen",
    haveSeen: true,
    rate: 4.5
  },
  {
    movie:"Die Hard",
    haveSeen: false,
    rate: 5.0
  }
]

function showMovie(movieDB) {
  for(var i = 0; i < movieDB.length; i ++) {
    if (movieDB[i].haveSeen) {
      console.log("You have watched \"" + movieDB[i].movie + "\" - " + movieDB[i].rate + " stars");
    } else {
      console.log("You have not seen \"" + movieDB[i].movie + "\" - " + movieDB[i].rate + " stars");
    }
  }
}

movieDB.forEach(function(movie) {
  if (movie.haveSeen) {
    console.log("You have watched \"" + movie.movie + "\" - " + movie.rate + " stars");
  } else {
    console.log("You have not seen \"" + movie.movie + "\" - " + movie.rate + " stars");
  }
});

function buildstring(movie) {
  if (movie.haveSeen) {
    console.log("You have watched \"" + movie.movie + "\" - " + movie.rate + " stars");
  } else {
    console.log("You have not seen \"" + movie.movie + "\" - " + movie.rate + " stars");
  }
};

movieDB.forEach(function(movie) {
  buildstring(movie);
});

var person = {
  name: "Jack",
  age: 29,
  gender: "Male",
  showDetail: function() {
    console.log("My name is " + this.name + " and my age is " + this.age + ", and I am a " + person.gender + ".");
  }
};