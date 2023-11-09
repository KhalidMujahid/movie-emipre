import * as mongoose from "mongoose";

const MovieSchema: mongoose.Schema = new mongoose.Schema(
  {
    movie_title: {
      type: String,
      trim: true,
    },
    movie_desc: {
      type: String,
      trim: true,
    },
    movie_image_front: {
      type: String,
      trim: true,
      default: "movie_front.png",
    },
    movie_image_back: {
      type: String,
      trim: true,
      default: "movie_back.png",
    },
    movie_file: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
