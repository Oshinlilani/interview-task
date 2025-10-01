import express from 'express'
const router = express.Router();
import  Product from '../models/products.js'
import authMiddleware from '../middleware/verifyToken.js'

// Get all products (protected)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get single product by ID (protected)
router.get('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
