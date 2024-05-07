const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const instanceRoutes = require('./routes/instanceRoutes');
const userRoutes = require('./routes/userRoutes');
const databaseRoutes = require('./routes/databaseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/instances', instanceRoutes);
app.use('/users', userRoutes);
app.use('/databases', databaseRoutes);

// Connect to MongoDB
const mongoURI = 'mongodb+srv://Amazon:Amazon@cluster0.metou6t.mongodb.net/Amazon?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
