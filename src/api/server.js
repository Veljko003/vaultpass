// Imports
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import UserModel from './models/UserModel.js';

// Initializing the Express app
const app = express();

// Applying CORS middleware to allow cross-origin requests
app.use(cors());

// Using bodyParser middleware to parse JSON data from requests
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

// API endpoint to handle user sign-in
app.post('/sign-in', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    /*
     Implement more secure authentication logic here: 
          - Hashing passwords
          - Token-Based Authentication
          - Authorization Middleware
          - Limit Failed Sign-In Attempts
          - Account Lockout
          - Secure Sessions
    */

    res.status(200).json({ message: 'Sign in successful', user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 5000; // Setting up the server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
