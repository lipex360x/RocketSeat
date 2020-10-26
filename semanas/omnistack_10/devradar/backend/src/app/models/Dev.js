import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const DevSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    github_username: {
      type: String,
      require: true,
    },

    bio: {
      type: String,
      require: true,
    },

    avatar_url: {
      type: String,
      require: true,
    },

    techs: [
      {
        type: String,
        require: true,
      },
    ],

    location: {
      type: PointSchema,
      index: '2dsphere',
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model('Dev', DevSchema);
