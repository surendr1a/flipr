const Instance = require('../models/Instance');

const addInstance = async (req, res) => {
  const { name, connectionString } = req.body;

  try {
    const newInstance = new Instance({ name, connectionString });
    await newInstance.save();

    res.status(201).json(newInstance);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add instance' });
  }
};

const getInstances = async (req, res) => {
  try {
    const instances = await Instance.find();
    res.status(200).json(instances);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve instances' });
  }
};

module.exports = { addInstance, getInstances };
