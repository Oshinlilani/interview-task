import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authMiddleware from './middleware/verifyToken.js'

const app = express();

app.use(express.json())
app.use(cors())

// mongodb connection
mongoose.connect("mongodb+srv://oshinlilani40_db_user:OoYWIvgE4sQE1RzE@cluster0.6xndnhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("mongodb connected"));



//routes
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});

app.listen(5000 , () => console.log("server is running on 5000"))