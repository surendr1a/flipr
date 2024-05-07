const Database = require('../models/Database');

const createDatabase = async (req, res) => {
  const { name, instanceId } = req.body;

  try {
    const newDatabase = new Database({ name, instanceId });
    await newDatabase.save();

    res.status(201).json(newDatabase);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create database' });
  }
};

const getDatabases = async (req, res) => {
  try {
    const databases = await Database.find();
    res.status(200).json(databases);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve databases' });
  }
};

const deleteDatabase = async (req, res) => {
  const { databaseId } = req.params;

  try {
    await Database.findByIdAndDelete(databaseId);
    res.status(200).json({ message: 'Database deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete database' });
  }
};

module.exports = { createDatabase, getDatabases, deleteDatabase };
