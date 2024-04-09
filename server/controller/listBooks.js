import Book from "../models/bookModel.js";

export const listBooks = async (req, res) => {
    try {
      let { page = 1, limit = 3, search = "" } = req.query;
  
      const query = {};
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ];
      }
  
      const options = {
        limit: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
      };
  
      const books = await Book.find(query, null, options);
  
      res.status(200).json({
        status: "OK",
        page: parseInt(page),
        limit: parseInt(limit),
        data: books
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
