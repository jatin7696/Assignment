const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");

// handleFileChosen = async (file) => {
//   return new Promise((resolve, reject) => {
//     let fileReader = new FileReader();
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//       console.log(resolve);
//     };
//     fileReader.onerror = reject;
//     fileReader.readAsText(data.csv);
//   });
// };
//joining path of directory
// const directoryPath = path.join(__dirname, "./cg");
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//   //handling error
//   if (err) {
//     return console.log("Unable to scan directory: " + err);
//   }
//   //listing all files using forEach
//   files.forEach(function (file) {
//     // Do whatever you want to do with the file
//     console.log(file);
//   });
// });
//let myList = [];
function p1(da) {
  var translation = "";
  let myList = [];
  fs.createReadStream(da)
    .pipe(csv())
    .on("data", (row) => {
      myList.push(row);
    })
    .on("end", () => {
      // console.log(myList);
      // myList.sort();
      //console.log(myList.sort());
      //console.log(row);
      // console.log(myList);
      // myList = row;
      // var sortable = [];
      // for (var vehicle in row) {
      //   sortable.push([vehicle, row[vehicle]]);
      // }
      // sortable.sort(function (a, b) {
      //   return a[1] - b[1];
      // });
      //for (var i = 0; i <= row.length; i++) {
      // if ("jatin" == row.Name) {
      //   console.log("matched");
      // }
      //}
      // let str = `${row["email"]} ${row["firstname"]}`;
      // console.log(str);
      // return myList;
    });
  console.log(myList);
  //  .on("end", () => {
  //    console.log("CSV file successfully processed");
  //  });
}
//console.log(myList);
var c = "Authors.csv";

//p1(c);

var d = "Books.csv";
const a = p1(d);
//console.log("a", a);
//console.log("a", a);
// for (var i = 0; i <= a.size(); i++) {
//   myList.push(a[i]);
// }

//myList.push(a);
//console.log("wooo ", myList);
//console.log(JSON.stringify(p1(d)));
// const p1 =()=> new Promise((rsolve,reject)=>{
//   resol

// });

// const fetchdata = async () => {
//   const response = await Promise.all([
//     fs.readFile("cpy.csv"),
//     fs.readFile("data.csv"),
//   ])
//     .then((results) => {
//       return ([rawFileOneValues, rawFileTwoValues] = results);
//       console.log("this is then >>>>", rawFileOneValues, rawFileTwoValues);
//       // Your other function to process them
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log("this is response from csv >>>>> ", response);
// };
// fetchdata();

// const fetchdata = async () => {
//   try {
//      const resOne = await p1();
//      const res2 = await p2();
//      const res3 = await p3();
//      console.log(resOne,res2,res3);
//     const beforeTime = new Date();
//   //  const response = await Promise.all([p1(), p2(), p3()]);
//     //const afterTime = new Date();
//    // console.log("response ", response, afterTime - beforeTime);
//   } catch (error) {
//     console.log("error .. " + error);
//   }
// };
