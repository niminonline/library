import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
  try {
    const { name, description, publishDate, price } = req.body;
    const book = new Book({
      name,
      description,
      publishDate,
      price,
    });
    await book.save();
    res.status(200).json({status:"OK", message: "Book added successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
