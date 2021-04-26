const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema(
    {
        category: {
            type: Number,
            enum: [1, 2],
            required: [true, 'the Question must have category 1 or 2']
        },
        textOfTheQuestion: {
            type: String,
            required: [true, 'question text must be'],
            unique: true,
            maxlength: [50, 'A question must have <= 50 characters'],
            minlength: [3, 'A question must have >= 3 characters'],
        },
        imageUrls: [
            {
                type: String,
                required: [true, 'the Question must have image link']
            }
        ]
    });

module.exports = mongoose.model("Question", questionSchema);