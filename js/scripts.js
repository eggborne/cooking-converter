function tspToCups(tsp) {
  return tsp/48;
};
function pecksToBushels(pecks) {
  return pecks/4
}

var userTsp = prompt("How many teaspoons do you have?")
userTsp = parseFloat(userTsp)
alert("You have " + tspToCups(userTsp).toPrecision(2) + " cups of cooking liquid.")

var userPecks = prompt("How many pecks do you have?")
userPecks = parseFloat(userPecks)
alert("You have " + pecksToBushels(userPecks).toPrecision(2) + " bushels of cooking liquid.")
var name = "Mike"
var age = 12
var height = 6
alert("Your name is "+name+", your age is "+age+", and your "+height)
