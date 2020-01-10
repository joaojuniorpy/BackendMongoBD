const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        resquired: true, 
    },
    description: {
        type: String,
        resquired: true, 
    },
    url: {
        type: String,
        resquired: true, 
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', ProductSchema)