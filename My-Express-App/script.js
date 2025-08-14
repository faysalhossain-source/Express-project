const express = require("express");
const app = express();


app.use(express.json());


const employeeRoutes = require("./routes/employeeRoutes");
app.use("/routs", userRouts); // employees endpoint

// Server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
