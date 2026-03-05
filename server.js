const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/tinh", (req, res) => {

    let x = Number(req.body.x);
    let y = Number(req.body.y);

    let z = x + y;

    res.json({ketqua: z});

});

app.listen(3000, () => {
    console.log("Server chạy tại http://localhost:3000");
});
