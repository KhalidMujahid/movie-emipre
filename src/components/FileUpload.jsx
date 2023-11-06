import React, { useState } from "react";
import Dropzone from "react-dropzone";

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Here, you can handle the file upload and show progress.
    // For simplicity, we'll just log the selected files to the console.

    console.log("Selected files:", acceptedFiles);

    // You can use an HTTP request to upload the files to your server
    // and update the progress based on the upload status.

    // For a real-world application, you might want to use a file upload library
    // like axios or fetch to send the file to your server.

    // For example:
    // const formData = new FormData();
    // acceptedFiles.forEach((file) => {
    //   formData.append("file", file);
    // });
    // const response = await axios.post("/your-upload-endpoint", formData);

    // Handle file upload progress and success/failure here.
    // You can update state to show progress and success messages.

    // setProgress(0); // Set progress to 0 initially
    // axios.post("/your-upload-endpoint", formData, {
    //   onUploadProgress: (progressEvent) => {
    //     const progress = (progressEvent.loaded / progressEvent.total) * 100;
    //     setProgress(progress);
    //   },
    // })
    // .then((response) => {
    //   setSuccess(true);
    //   setProgress(100);
    // })
    // .catch((error) => {
    //   setError(error);
    // });
  };

  return (
    <div className="m-10 items-center">
      <h2>Upload File</h2>
      <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
     <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            {files.length > 0 && (
              <div>
                <h3>Selected Files:</h3>
                <ul>
                  {files.map((file) => (
                    <li key={file.name}>{file.name}</li>
                  ))}
                </ul>
                {/* Display upload progress here */}
                {/* Example: <div>Progress: {progress}%</div> */}
              </div>
            )}
          </div>
        )}
      </Dropzone>
      <span className="mt-2 block text-sm font-semibold text-gray-900">Add new file to database</span>
    </button>
      
    </div>
  );
}

export default FileUpload;
