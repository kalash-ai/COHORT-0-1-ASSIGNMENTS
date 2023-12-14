let fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  // console.log(err)
  if (err) {
    console.log("Some error");
  }
  console.log(data);
  let edit = data;
  edit = edit.replace(/\s+/g, ' ').trim();

  fs.writeFile("a.txt", edit, function (err) {
    if (err) {
      console.log("error");
    }
    console.log(`This file data ${edit}`);
  });
});
//  console.log(data)
//  let finalstr = data.split().replace(/\s{2,}/g, ' ').trim()
//  console.log(finalstr)
