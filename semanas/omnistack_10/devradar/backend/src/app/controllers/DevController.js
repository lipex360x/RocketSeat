// import * as Yup from 'yup';
// import Hello from '../models/Hello';
import axios from 'axios';
import stringToArray from '../../utils/stringToArray';
import Dev from '../models/Dev';

class DevController {
  async index(req, res) {
    const dev = await Dev.find();

    return res.json(dev);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = response.data;
      const arrayTechs = stringToArray(techs);

      // De acordo com models/utils/PointSchema
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        name,
        avatar_url,
        bio,
        github_username,
        techs: arrayTechs,
        location,
      });
    }
    return res.json(dev);
  }

  async update(req, res) {
    // - github_username
    const { techs, latitude, longitude, github_username, bio } = req.body;
    const arrayTechs = stringToArray(techs);
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    let dev = await Dev.update(
      { github_username },
      {
        $set: {
          techs: arrayTechs,
          bio,
          location,
        },
      },
      { new: true }
    );
    dev = await Dev.findOne({ github_username });

    return res.json(dev);
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      await Dev.deleteOne({
        _id: id,
      });
      return res.json({ ok: true });
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new DevController();
