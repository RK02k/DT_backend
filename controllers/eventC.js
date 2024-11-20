const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const createEvent = async (req, res) => {
    try {
        const db = getDB();
        const event = req.body;
        if (req.file) {
            event.files = { image: req.file.filename };
        }
        const result = await db.collection("events").insertOne(event);
        res.status(201).json({ message: "Event created", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEventById = async (req, res) => {
    try {
        const db = getDB();
        const { event_id } = req.params;
        const event = await db.collection("events").findOne({ _id: new ObjectId(event_id) });
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getLatestEvents = async (req, res) => {
    try {
        const db = getDB();
        const { limit = 5, page = 1 } = req.query;
        const events = await db.collection("events")
            .find()
            .sort({ schedule: -1 })
            .skip((page - 1) * parseInt(limit))
            .limit(parseInt(limit))
            .toArray();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEvent = async (req, res) => {
    try {
        const db = getDB();
        const { id } = req.params;
        const updatedData = req.body;
        if (req.file) {
            updatedData.files = { image: req.file.filename };
        }
        await db.collection("events").updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
        res.status(200).json({ message: "Event updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const db = getDB();
        const { id } = req.params;
        await db.collection("events").deleteOne({ _id: new ObjectId(id) });
        res.status(200).json({ message: "Event deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createEvent, getEventById, getLatestEvents, updateEvent, deleteEvent };
