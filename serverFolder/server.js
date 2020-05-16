let express = require("express");
let app = express();

app.use(function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("../static"));

// 1 way: of calling the html file:
// app.get("/",(req,res)=>{
//  pathFile = __dirname.substring(0,__dirname.length - 12);
//     res.sendFile(pathFile+"static/index1.html");
//     // res.send("Hello");
// });

// 2 way: use the following syntax: http://localhost:5000/index1.html which we 
//           are using here

// 3 Way: using index.html instead of index1.html, then use: http://localhost:5000

app.listen(5000, function() {
    console.log("Serving static on 5000");
});