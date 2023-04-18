//your JS code here. If required.
const string = "heeaven";
let index = -1;
let fnc = ' ';
for (let i of string) {
    if (string.split(i).length - 1 === 1) {
        fnc = i;
        break;
    } else {
        index += 1;
    }
}
if (index === 1) {
    console.log("Either all characters are repeating or string is empty");
} else {
    console.log(`First non-repeating character is ${fnc}`);
}
