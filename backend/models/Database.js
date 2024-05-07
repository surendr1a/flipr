const mongoose = require('mongoose');

const DatabaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instanceId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Instance' },
});

module.exports = mongoose.model('Database', DatabaseSchema);
