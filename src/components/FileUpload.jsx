import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

function FileUpload() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDesc, setMovieDesc] = useState("");
  const [movieImageFront, setMovieImageFront] = useState(""); // Use state to store image data
  const [movieImageFrontPreview, setMovieImageFrontPreview] = useState(null); // Use state for image preview
  const [movieImageBack, setMovieImageBack] = useState("movie_back.png");
  const [movieFile, setMovieFile] = useState("");
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleDrop = async (acceptedFiles) => {
    // Set the first file from acceptedFiles as the movie file
    if (acceptedFiles.length > 0) {
      setMovieFile(acceptedFiles[0]);
    }

    setFiles(acceptedFiles);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMovieImageFront(file);
      setMovieImageFrontPreview(URL.createObjectURL(file)); // Display image preview
    }
  };

  // convert poster image to base64
  const base64 = (f) => {
    return new Promise((resolve,reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(f);

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(error);
      };
    });
  }

  const handleUpload = async () => {
      try {

      const poster = await base64(movieImageFront);

      const data = new FormData();
      data.append("movie_title", movieTitle);
      data.append("movie_desc", movieDesc);
      data.append("movie", poster);
      // formData.append("files", movieImageBack);
      // formData.append("movie_file", movieFile);

      

      files.forEach((file) => {
        data.append("movie", file);
      });

      console.log(data);

      setProgress(0);
      const response = await axios.post("https://wikishare.cyclic.app/api/movies", data, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setProgress(progress);
        },
        headers: {
          // Add any necessary headers here
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
      setProgress(100);

      console.log("Server response:", response.data);
    } catch (error) {
      setError(error);
      console.error("Error uploading movie:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Movie</h2>
      <form className="space-y-4">
    
        <div>
          <label htmlFor="movieTitle" className="block text-sm font-medium text-gray-700">
            Movie Title:
          </label>
          <input
            type="text"
            id="movieTitle"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="movieDesc" className="block text-sm font-medium text-gray-700">
            Movie Description:
          </label>
          <input
            type="text"
            id="movieDesc"
            value={movieDesc}
            onChange={(e) => setMovieDesc(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="movieImageFront" className="block text-sm font-medium text-gray-700">
            Movie Poster:
          </label>
          {/* Input for file selection */}
          <input
            type="file"
            id="movieImageFront"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {/* Display image preview */}
          {movieImageFrontPreview && (
            <img src={movieImageFrontPreview} alt="Movie Poster" className="mt-2 rounded-md w-20 h-auto" />
          )}
        </div>
        {/* Dropzone for file upload */}
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone mt-4 p-4 border-dashed border-2 rounded-md">
              <input {...getInputProps()} />
              <p className="text-gray-600">Drag 'n' drop some files here, or click to select files</p>
              {files.length > 0 && (
                <div className="mt-2">
                  <h3 className="text-lg font-semibold">Selected Files:</h3>
                  <ul className="list-disc list-inside">
                    {files.map((file) => (
                      <li key={file.name} className="text-gray-700">{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Dropzone>

        {/* Display upload progress here */}
        {progress > 0 && progress < 100 && <div className="mt-4">Progress: {progress}%</div>}

        {/* Display success or error messages */}
        {success && <p className="text-green-600 mt-4">Movie uploaded successfully!</p>}
        {error && <p className="text-red-600 mt-4">Error uploading movie: {error.message}</p>}

        {/* Button to trigger file upload */}
        <button
          type="button"
          onClick={handleUpload}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Upload Movie
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
