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
    poster: {
      type: String,
      trim: true,
      default: "poster.png",
    },
    movie_file: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
