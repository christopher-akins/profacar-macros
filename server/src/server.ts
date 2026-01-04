import express from "express";

const app = express();

const port = 3000;

app.get("/api/test", (req, res) => {
  res.send("Hello, profacar api, testing");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
