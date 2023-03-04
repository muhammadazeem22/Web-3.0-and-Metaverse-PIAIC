var invited_people = ["Ali", "Asad", "Adeel", "Tabish", "Bilal", "Awais", "Mohsin"];
console.log("I just found out that i have only space for 2 persons for dinner.");
while (invited_people.length > 2) {
    var remove_guest = invited_people.pop();
    console.log("Sorry ".concat(remove_guest, ", I cann't invite you to the dinner."));
}
console.log("The final two guests are ".concat(invited_people[0], " and ").concat(invited_people[1], "."));
console.log("Dear ".concat(invited_people[0], ", You are invited for a dinner."));
console.log("Dear ".concat(invited_people[1], ", You are invited for a dinner."));
while (invited_people.length > 0) {
    var remove = invited_people.pop();
    console.log(invited_people);
}
