const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const protect = require('./Middlewares/authMiddleware');
const cors = require('cors');
dotenv.config(); 
const app = express();
connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', authRoutes);

app.get('/api/dashboard', protect, (req, res) => {
  res.json({ message: 'Welcome to the dashboard', userId: req.user });
});

app.get('/', (req, res) => {
  res.send('Welcome to the User Management System API. Server is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});