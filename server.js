const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

//init Middleware , in osder for it to work we use this : extended: false
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/picture", require("./routes/api/picture"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
