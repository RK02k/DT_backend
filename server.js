const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");
const eventRoutes = require("./routes/eventR");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api/v3/app", eventRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
