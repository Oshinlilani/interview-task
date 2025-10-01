import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken'

// Mock user
const mockUser = {
  id: '1',
  username: 'testuser',
  password: '123456'
};

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:" , username. password);

  if (username !== mockUser.username || password !== mockUser.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: mockUser.id, username: mockUser.username }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.json({ token });
});

export default router;