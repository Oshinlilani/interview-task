import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import products from './routes/products.js';
import authRouter from './routes/auth.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())

// mongodb connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));



//routes
app.use('/api/products', products)
app.use('/api/auth', authRouter)

app.listen(5000 , () => console.log("server is running on 5000"))