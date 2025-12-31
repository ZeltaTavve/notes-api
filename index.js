require("dotenv").config();
const express = require("express");
const app = express();

// Middleware untuk parse JSON
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.json({ message: "Notes API ready" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));