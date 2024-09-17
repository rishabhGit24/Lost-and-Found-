const express = require("express");
const multer = require("multer");
const {
  getItems,
  addItem,
  searchItems,
} = require("../controllers/itemController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", getItems);
router.post("/", upload.single("image"), addItem);
router.get("/search", searchItems);

module.exports = router;
