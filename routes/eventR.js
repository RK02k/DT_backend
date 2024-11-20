const express = require("express");
const multer = require("multer");
const {
    createEvent,
    getEventById,
    getLatestEvents,
    updateEvent,
    deleteEvent,
} = require("../controllers/eventC");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // For image file upload

router.post("/events", upload.single("image"), createEvent);
router.get("/events", getLatestEvents);
router.get("/events/:event_id", getEventById);
router.put("/events/:id", upload.single("image"), updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;
