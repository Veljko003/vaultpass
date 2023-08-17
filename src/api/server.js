import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import UserModel from './models/UserModel.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB setup
const dbURI = 'mongodb://localhost:27017/vaultpass';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// API endpoint to handle user registration
app.post('/sign-up', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new UserModel({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
