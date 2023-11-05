import React from "react";
import { useParams } from "react-router-dom";

function FileDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>File Details</h2>
      <p>File ID: {id}</p>
      {/* Display file details and download link */}
    </div>
  );
}

export default FileDetails;