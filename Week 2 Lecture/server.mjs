import express from "express";
import ViteExpress from "vite-express";
import Database from "better-sqlite3";

const app = express();
const db = new Database("wadsongs.db");

app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({message: "Server connected successfully"});

});

// artist
app.get("/songs/artist/:name", (req, res) => {
    const artistName = req.params.name;
    const songs = db.prepare("SELECT * FROM wadsongs WHERE artist = ?").all(artistName);
    res.json(songs);
});

// songs/all
app.get("/songs/all", (req, res) => {
    const songs = db.prepare("SELECT * FROM wadsongs").all();
    res.json(songs);
})

ViteExpress.listen(app, 3000, () =>
console.log("Expreess + Vite Running on http://localhost:3000"));