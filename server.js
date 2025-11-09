import express from "express";
import cors from "cors";
import establishments from "./data/establishments";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/images", express.static("public/images"));

app.get("/", (req, res) => {
  res.send("Welcome to the Hout Bay Establishments API!");
});

app.get("api/establishments", (req, res) => {
  res.json(establishments);
});

app.get("/api/establishments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const establishment = establishments.find((e) => e.id === id);
  if (establishment) {
    res.json(establishment);
  } else {
    res.status(404).json({ message: "Establishment not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
