import Book from "../models/bookModel.js";

export const listBook = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);

    res.status(200).json({
      status: "OK",
      data: books,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
