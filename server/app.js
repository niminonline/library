import express from "express";
import connectDB from "./db/mongoConnect.js";
import cors from "cors";
import dotenv from "dotenv";

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

app.listen(port, () => {
  console.log(`Server started on port ${port}. URL: http://localhost:${port}/`);
});

app.get("/",(req,res)=>{
    res.send("Hello nimzz")
})

