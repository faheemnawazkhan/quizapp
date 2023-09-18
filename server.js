const express = require("express");
const app = express();
app.get("/", (req, res) => {
    if(req.query.username==="faheem")
    {
        res.send("welcome faheem nawaz khan");
    }
  else
  {
    res.send("you are not allwed");
  }
  console.log(req.query);
});
app.listen(3000, () => {
  console.log("you app is going to start");
});
