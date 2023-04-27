import express from "express";
const router = express.Router();

router.get("/api/demo/get", (req, res) => {
  console.log("GET /api/demo/get");
  res.json({ message: "Hello from server!" });
});
router.post("/api/demo/post", (req, res) => {
  console.log("POST /api/demo/post");
  res.json({ message: "Hello from server!" });

});

export { router };
