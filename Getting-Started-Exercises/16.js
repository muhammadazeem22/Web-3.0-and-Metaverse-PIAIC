console.log("Dinner Invitation List");
var invited_people = ["Asad", "Tabish", "Bilal", "Awais"];
console.log(invited_people);
console.log("Guys i just found a bigger space for dinner So i am adding few more guests");
invited_people.unshift("Ali");
console.log(invited_people);
var index = Math.floor(invited_people.length / 2);
invited_people.splice(index, 0, "Adeel");
console.log(invited_people);
invited_people.push("Mohsin");
console.log(" ");
console.log("The final list of the Invited Guesrs foir Dinner is Below");
console.log(invited_people);
console.log("Dinner Invitation List!");
for (var i = 0; i < invited_people.length; i++) {
    console.log("Dear ".concat(invited_people[i], " You are invited for a dinner."));
}
