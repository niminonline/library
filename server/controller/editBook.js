import Book from "../models/bookModel.js";

export const editBook = async (req, res) => {
    try {
        
        const { _id,name, description, publishDate, price } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(
          _id,
          { name, description, publishDate, price },
          { new: true }
        );
        if (!updatedBook) {
          return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({status:"OK", message: "Book updated successfully"});
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
      }
    }