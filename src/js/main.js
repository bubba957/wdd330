import { americanFood, chineseFood, frenchFood, italianFood, japaneseFood, mexicanFood } from "./utils.mjs";

const currentDate = new Date();
const date = currentDate.toLocaleDateString();
console.log(date);

document.querySelector('.todays-date').innerHTML = date;

americanFood();
chineseFood();
frenchFood();
italianFood();
japaneseFood();
mexicanFood();

// function readLocalJSONFile(filePath, callback) {
//     const rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", './json/recipes.json', true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status === 200) {
//             callback(rawFile.responseText);
//         }
//     };
//     rawFile.send(null);
// }

// readLocalJSONFile("https://bam.nr-data.net/jserrors/1/ac2d9ced31?a=1386217285&sa=1&v=1.271.0&t=Unnamed%20Transaction&rst=16554&ck=0&s=7a770b31228f8203&ref=https://www.mccormick.com/blogs/recipes/tagged/entrees&ptid=1edf224b0d922269", function(responseText) {
//     const jsonData = JSON.parse(responseText);
//     console.log(jsonData); // Outputs parsed JSON object
// });

// function change_myselect(sel) {
//     const dbParam = JSON.stringify({table:sel,limit:20});
//     const xml = new XMLHttpRequest();
//     xml.onload = function() {
//         const myObj = JSON.parse(this.responseText);
//         let text = "<table border = '1'>"
//         for (let x in myObj) {
//             text += "<tr><td>" + myObj[x].continent + "</td></tr>";
//         }
//         text += "</table>"
//         document.querySelector("#recipes").innerHTML = text;
//     }
//     xml.open("POST", "recipes.json", true);
//     xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xml.send("x=" + dbParam);
//     console.log(dbParam); 
// }

