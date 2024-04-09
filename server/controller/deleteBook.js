import Book from "../models/bookModel.js";

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).res.json({status:"OK", message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
