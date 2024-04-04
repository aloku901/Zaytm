const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const MainRouter = require("./routes/index");

app.use("/api/v1", MainRouter);
app.get('/', (req, res) => {
    res.send("ALok Upadhyay");
})

app.listen(port, () => {
    console.log(`App is running on port No. ${port}`);
})
