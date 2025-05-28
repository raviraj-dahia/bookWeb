const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookReview', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Book = mongoose.model('Book', new mongoose.Schema({
  title: String,
  author: String,
  description: String,
}));

Book.insertMany([
  { title: "Atomic Habits", author: "James Clear", description: "Build better habits." },
  { title: "The Alchemist", author: "Paulo Coelho", description: "Chase your dreams." },
  { title: "1984", author: "George Orwell", description: "Dystopian future." }
]).then(() => {
  console.log("Books inserted");
  mongoose.disconnect();
});
