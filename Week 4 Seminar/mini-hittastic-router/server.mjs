import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("wadsongs.db");

app.use(cors());
app.use(express.json());

app.get("/songs/artist/:artist", (req, res) => {
    const artist = req.params.artist;

    const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist = ?");
    const rows = stmt.all(artist);

    res.json(rows);
});

app.post("/song/new", (req,res) => {
    const { title, artist, year } = req.body;

    const stmt = db.prepare("INSERT INTO wadsongs (title, artist, year, downloads, price, quantity) VALUES (?, ?, ?, ?, ?, ?)");
    const result = stmt.run(title, artist, year, 0, 0, 10);

    res.json({
        success: true,
        id: result.lastInsertRowid
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});