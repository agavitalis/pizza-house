const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {

    res.status(200).send({
        "Welcome to pizza house user service": "v1.0"
    });

});

app.listen(PORT, () => {
    console.log("user service listening to port %d", PORT);
});