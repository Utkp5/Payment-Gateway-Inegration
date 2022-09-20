const express = require('express');
const app = express();
const PORT = 5000;

app.get("/", function(req,res) {
    return res.send("all done");
});

app.listen(PORT, function(err){
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on PORT : ${PORT}`);
});