const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true,
    
    },
    tags: [{
        type:mongoose.Schema.Types.ObjectId,
    }],

    category: {
        type: String,
        default: '',
        required: true,
    },

    subcategory: [subcategory],

    createdAt: 'created_at',

    updatedAt: 'updated_at',

    deletedAt: {
        type: Date,
        default: null,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    publishedAt: {
        type: Date,
        default: null,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', blogsSchema) 



