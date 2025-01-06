const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/mern");
        await mongoose.connect("mongodb+srv://afnanhybrid:M96EEqVkngT9Ex5G@eventmanagementcrm.tkrc5.mongodb.net/?retryWrites=true&w=majority&appName=eventmanagementCRM");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Connection Failed", error);
        process.exit(1);
    }
};
module.exports = connectDb;