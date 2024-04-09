import Book from "../models/bookModel.js";

export const listBooks = async (req, res) => {
  try {
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
