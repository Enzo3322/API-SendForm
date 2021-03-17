const mongoose = require('../database');

const FormularioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
});

const Formulario = mongoose.model('Formulario', FormularioSchema);

module.exports = Formulario;