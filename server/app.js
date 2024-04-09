import express from "express";
import connectDB from "./db/mongoConnect.js";
import cors from "cors";
import dotenv from "dotenv";
import { addBook } from "./controller/addBook.js";
import { deleteBook } from "./controller/deleteBook.js";
import { editBook } from "./controller/editBook.js";
import { listBooks } from "./controller/listBooks.js";
import { listBook } from "./controller/listBook.js";

const app = express();
dotenv.config();
const port = parseInt(process.env.PORT || "5001");
const allowedOrigins = ["http://localhost:4200", "localhost:4200"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET, POST, PUT, PATCH, DELETE",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Test")
// })
app.get("/books", listBooks);
app.get("/book/:id", listBook);
app.post("/add-book", addBook);
app.put("/edit-book", editBook);
app.delete("/delete-book/:id", deleteBook); 

app.listen(port, () => {
  console.log(`Server started on port ${port}. URL: http://localhost:${port}/`);
});
