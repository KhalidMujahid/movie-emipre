import { Router } from "express";
import { addMovie,getMovies,getOneMovie,deleteMovie,updateMovie } from "../controllers/movie";

const movieRouter: Router = Router();

// get all movies
movieRouter.get("/",getMovies);

// get single movie
movieRouter.get("/:id",getOneMovie);

// add movie
movieRouter.post("/",addMovie);

// update single movie
movieRouter.patch("/:id",updateMovie);

// delete all movies
movieRouter.delete("/",deleteMovie);

export default movieRouter;