
const express = require("express");
const app = express();


app.use(express.json());

// Simple GET API
app.get("/", (req, res) => {
  res.send({ message: "Hello World from Express API!" });
});


app.post("/api/user", (req, res) => {  //  POST API
  const { name, email } = req.body;
  res.send({
    message: "User data received successfully!",
    data: { name, email },
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
