import express from "express";
const router = express.Router();

router.get("/api/demo/get", (req, res) => {
  console.log("GET /api/demo/get");
});
router.post("/api/demo/post", (req, res) => {
  console.log("POST /api/demo/post");
});

export { router };
