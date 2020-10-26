// import * as Yup from 'yup';
import Dev from '../models/Dev';
import stringToArray from '../../utils/stringToArray';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    // Buscar devs por um raio
    // Filtrar tecnologias | mongo operators
    const arrayTechs = stringToArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: arrayTechs,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs });
  }
}

export default new SearchController();
