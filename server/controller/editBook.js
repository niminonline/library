import Book from "../models/bookModel.js";

export const editBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, publishDate, price } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(
          id,
          { name, description, publishDate, price },
          { new: true }
        );
        if (!updatedBook) {
          return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).res.json({status:"OK", message: "Book updated successfully"});
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    }