import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    originalname: {
      type: String,
      require: true,
    },
    key: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

postSchema.pre('save', function () {
  if(!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
})

export default mongoose.model('Post', postSchema);

