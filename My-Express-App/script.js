const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
