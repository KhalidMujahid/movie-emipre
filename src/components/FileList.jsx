import React,{ useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import axios from "axios";

function FileList() {
  const [movies,setMovies] = useState([]);

  async function fetchMovies(){
    const response = await axios.get("https://movie-apis-15yh.onrender.com/api/movies");
    setMovies(response.data);
  }

  useEffect(() => {
    fetchMovies();
  },[]);

  return (
    <div>
       <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">File List</h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Link to='/upload'>
                Upload
            </Link>
            
          </button>
        </div>
      </div>
    </div>
        <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Movie Lists</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse Recent
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8"
        >
          {movies.map((movie) => (
            <div key={movie._id} className="group relative" 
            >
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
              <Link to={`/file/${movie._id}`} className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img
                    // src={movie.movie_image_back}
                    src={`https://ui-avatars.com/api/?name=${movie.movie_title}`}
                    alt={movie.movie_title}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <Link to={`/file/${movie._id}`}>
                    <span className="absolute inset-0" />
                    {movie.movie_title}
                  </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{movie.movie_desc}</p>
              <p className="mt-1 text-sm text-gray-500">Uploaded at:{movie.updatedAt}</p>
              <p className="mt-1 text-sm text-gray-500 hidden">Download Link:{movie.movie_file[1].filesize}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FileList;
