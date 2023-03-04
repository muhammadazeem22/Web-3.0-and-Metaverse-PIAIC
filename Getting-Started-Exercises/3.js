var personalname = "Muhammad Azeem";
console.log(personalname.toLowerCase());
console.log(personalname.toUpperCase());
function toTitleCase(str) {
    // Convert the input string to lowercase and use a regular expression to match
    // the first letter of each word in the string
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) { return match.toUpperCase(); });
}
console.log(toTitleCase("jshdh JKSDH JSNDB JSDB"));
