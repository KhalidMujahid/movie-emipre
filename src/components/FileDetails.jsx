import React,{ useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FileDetails() {
  const { id } = useParams();
  const [movie,setMovie] = useState({});

  async function fetchMovieDetail(){
    const response = await axios.get(`https://movies-api-a6cx.onrender.com/api/movies/${id}`);
    if(response.status === 200){
      setMovie(response.data);
    }
  }

  useEffect(() => {
    fetchMovieDetail();
  },[]);


  return (
    <div>
      <h2>File Details</h2>
      <p>File ID: {id}</p>
      {/* Display file details and download link */}
    </div>
  );
}

export default FileDetails;