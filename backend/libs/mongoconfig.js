const mongoose = require("mongoose");

require("dotenv").config();

module.exports.MongoDBconfig = () => {
    const uri = process.env.MONGODB_URL || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inventory";

    if (!process.env.MONGODB_URL && !process.env.MONGO_URI) {
        console.warn("Warning: No MONGODB_URL or MONGO_URI set. Falling back to:", uri);
    }

    mongoose
        .connect(uri)
        .then(() => {
            console.log("Connected to database successfully");
        })
        .catch((err) => {
            console.error("MongoDB Connection Error:", err);
        });
};