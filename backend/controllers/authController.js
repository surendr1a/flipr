const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
};

const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser);

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create account' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log in' });
  }
};

module.exports = { signup, login };
