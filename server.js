require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/features", require("./routes/featureRoutes"));

// Fallback route (important)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(Server running);
});