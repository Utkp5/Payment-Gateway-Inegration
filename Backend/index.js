const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const app = express();
const PORT = 5000;



dotenv.config();
app.use(express.json());
app.use(cors());




app.get("/", function(req,res) {
    return res.send("all done");
});

app.listen(PORT, function(err){
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on PORT : ${PORT}`);
});