
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

// readLocalJSONFile("/Users/scody/OneDrive/Smith, Cody/WDD330-1/wdd330/final_project/wdd330/src/json/recipes.json", function(responseText) {
//     const jsonData = JSON.parse(responseText);
//     console.log(jsonData); // Outputs parsed JSON object
// });

function change_myselect(sel) {
    const dbParam = JSON.stringify({table:sel,limit:20});
    const xml = new XMLHttpRequest();
    xml.onload = function() {
        const myObj = JSON.parse(this.responseText);
        let text = "<table border = '1'>"
        for (let x in myObj) {
            text += "<tr><td>" + myObj[x].continent + "</td></tr>";
        }
        text += "</table>"
        document.querySelector("#recipes").innerHTML = text;
    }
    xml.open("POST", "recipes.json", true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("x=" + dbParam);
    console.log(dbParam); 
}

const currentDate = new Date();
const date = currentDate.toLocaleDateString();
console.log(date);

document.querySelector('.todays-date').innerHTML = date;