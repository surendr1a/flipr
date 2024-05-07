const mongoose = require('mongoose');

const InstanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  connectionString: { type: String, required: true },
});

module.exports = mongoose.model('Instance', InstanceSchema);
