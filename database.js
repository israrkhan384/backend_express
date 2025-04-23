const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No need for deprecated options
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error:', error.message);
     // Exit process on failure
    }
};

module.exports = connectDB;
