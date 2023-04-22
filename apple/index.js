const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const posts = {};
app.post("/post", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.get("/post", (req, res) => {
  res.send(posts[req.params.id]) || [];
});

app.listen(5000, () => {
  console.log("Apple Server started on port 5000");
});
