// import * as Yup from 'yup';
import Caso from '../models/Caso';
import Ong from '../models/Ong';

class CasoController {
  async store(req, res) {
    const ong_assoc = req.headers.authorization;
    const { title, description, value } = req.body;
    const caso = await Caso.create({
      title,
      description,
      value,
      ong_assoc,
    });
    return res.json(caso);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const ong_assoc = req.headers.authorization;
    const limit = 5;
    const count = await Caso.count({ where: { ong_assoc } });

    const data = await Caso.findAll({
      offset: (page - 1) * limit,
      limit,
      include: [
        {
          model: Ong,
          as: 'ong',
          attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
        },
      ],
      where: { ong_assoc },
    });

    res.header('X-Total-Count', count);
    return res.json(data);
  }

  async show(req, res) {
    const ong_assoc = req.headers.authorization;
    const { id } = req.params;
    const data = await Caso.findOne({
      include: [
        {
          model: Ong,
          as: 'ong',
          attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
        },
      ],
      where: { ong_assoc, id },
    });
    return res.json(data);
  }

  async update(req, res) {
    const ong_assoc = req.headers.authorization;
    const { id } = req.params;
    const { title, description, value } = req.body;

    const data = await Caso.update(
      { title, description, value },
      { where: { ong_assoc, id } }
    );
    return res.json(data);
  }

  async destroy(req, res) {
    const ong_assoc = req.headers.authorization;
    const { id } = req.params;

    await Caso.destroy({ where: { ong_assoc, id } });
    return res.status(204).send();
  }
}

export default new CasoController();
