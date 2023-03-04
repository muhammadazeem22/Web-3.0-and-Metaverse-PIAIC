const invited_people = ["Ali", "Asad", "Adeel", "Tabish", "Bilal", "Awais", "Mohsin"];
console.log("I just found out that i have only space for 2 persons for dinner.");


while (invited_people.length > 2)
{
    let remove_guest = invited_people.pop()
    console.log(`Sorry ${remove_guest}, I cann't invite you to the dinner.`)
}
console.log(`The final two guests are ${invited_people[0]} and ${invited_people[1]}.`)

console.log(`Dear ${invited_people[0]}, You are invited for a dinner.`)
console.log(`Dear ${invited_people[1]}, You are invited for a dinner.`)


while (invited_people.length > 0)
{
    let remove = invited_people.pop();
    console.log(invited_people)
}


