// import * as Yup from 'yup';
import Ong from '../models/Ong';

class OngController {
  async store(req, res) {
    const data = await Ong.create(req.body);
    return res.json(data);
  }

  async index(req, res) {
    const data = await Ong.findAll();
    return res.json(data);
  }

  async show(req, res) {
    const id = req.headers.authorization;
    const data = await Ong.findOne({ where: { user: id } });
    return res.json(data);
  }

  async update(req, res) {
    const id = req.headers.authorization;
    const data = await Ong.update(req.body, { where: { user: id } });
    return res.json(data);
  }

  async destroy(req, res) {
    const { user } = req.body;
    await Ong.destroy({ where: { user } });
    return res.status(204).send();
  }
}

export default new OngController();
