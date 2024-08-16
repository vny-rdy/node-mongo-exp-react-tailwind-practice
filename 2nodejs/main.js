const fs = require("fs");
// console.log(fs)
console.log("starting");
fs.writeFileSync("vny.txt","vny is good boy")
fs.writeFile("vny2.txt", "koushik is good boy", () => {
  console.log("done");
  fs.readFile("vny2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});
fs.appendFile("vny.txt", "koushik also", (e, d) => {
  console.log(d);
});
console.log("ending");
