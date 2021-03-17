const Formulario = require('../models/Formulario');

class FormularioController {
  async store(req, res) {
    const { email } = req.body;

    try {
      if (await Formulario.findOne({ email })) {
        return res.status(400).json({ 'error': 'Email já utilizado' });
      }

      const formulario = await Formulario.create(req.body);

      return res.status(201).json(formulario);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new FormularioController();
