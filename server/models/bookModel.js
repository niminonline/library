import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;