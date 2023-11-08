import { Request, Response, NextFunction } from "express";


// add movie
async function addMovie(req: Request, res: Response, next: NextFunction){}

// get all moves
async function getMovies(req: Request, res: Response, next: NextFunction){}

// get single movie
async function getOneMovie(req: Request, res: Response, next: NextFunction){}

// delete all movies
async function deleteMovies(req: Request, res: Response, next: NextFunction){}

// delete single movie
async function deleteMovie(req: Request, res: Response, next: NextFunction){}

// update single movie
async function updateMovie(req: Request, res: Response, next: NextFunction){}


export { addMovie,getMovies,getOneMovie,deleteMovies,deleteMovie,updateMovie };