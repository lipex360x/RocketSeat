// import * as Yup from 'yup';
import Ong from '../models/Ong';

class SessionController {
  async store(req, res) {
    const { id } = req.body;
    const ong = await Ong.findOne({ where: { user: id } });
    return res.json(ong);
  }
}

export default new SessionController();
