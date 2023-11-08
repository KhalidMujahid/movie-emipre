import { Request, Response, NextFunction } from "express";
import Movie from "../models/movie";


// add movie
async function addMovie(req: Request, res: Response, next: NextFunction){
	try{

		const { movie_title,movie_desc,movie_image_front,movie_image_back } = req.body;

		const movies = await Movie.create({movie_title,movie_desc,movie_image_front,movie_image_back})

		if(movies){
			return res.status(201).send(movies);
		} else {
			return res.status(400).send({ message: "An error occured!" });
		}


	} catch(error){
		next(error);
	}
}

// get all moves
async function getMovies(req: Request, res: Response, next: NextFunction){
	try{
		const movies = await Movie.find();
		return res.status(200).send(movies);
	} catch(error){
		next(error);
	}
}

// get single movie
async function getOneMovie(req: Request, res: Response, next: NextFunction){
	try{

		const { id } = req.params;

		const movie = await Movie.findById(id);
		return res.status(200).send(movie);

	} catch(error){
		next(error);
	}
}

// delete all movies
async function deleteMovies(req: Request, res: Response, next: NextFunction){
	try{

	} catch(error){
		next(error);
	}
}

// delete single movie
async function deleteMovie(req: Request, res: Response, next: NextFunction){
	try{

		const { id } = req.params;

		await Movie.findByIdAndDelete(id,{ new: true })
			.then(() => res.status(200).send({ message: "Movie deleted" }))
			.catch(() => res.status(400).send({ message: "An error occured" }))

	} catch(error){
		next(error);
	}
}

// update single movie
async function updateMovie(req: Request, res: Response, next: NextFunction){
	try{

		const { id } = req.params;

		const { movie_title,movie_desc,movie_image_front,movie_image_back } = req.body;

		await Movie.findByIdAndUpdate(id,{ movie_title,movie_desc,movie_image_front,movie_image_back },{ new: true })
			.then(() => res.status(200).send({ message: "Movie details updated!" }))
			.catch(() => res.status(400).send({ message: "An error occured" }))
	} catch(error){
		next(error);
	}
}


export { addMovie,getMovies,getOneMovie,deleteMovies,deleteMovie,updateMovie };