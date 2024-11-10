const express = require("express");
const path = require("path");
const app = express(); // Initialize the app

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "homePage")));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "design")));

// Routes for different HTML files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "homePage", "home.html"));
});

app.get("/courses", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "course.html"));
});

app.get("/courseDetails11A", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "courseDetails11A.html"));
});

app.get("/chapterDetails_Sets11", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "chapterDetails_Sets11.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "dashboard.html"));
});

app.get("/doubts", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "doubts.html"));
});

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "profile.html"));
});

app.get("/subjectDetails11_M", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "subjectDetails11_M.html"));
});

app.get("/subjectTest_M", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "subjectTest_M.html"));
});

app.get("/test1", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "test1.html"));
});

app.get("/tests", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "tests.html"));
});

app.get("/update", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "update.html"));
});

app.get("/watch-video", (req, res) => {
    res.sendFile(path.join(__dirname, "design", "watch-video.html"));
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
