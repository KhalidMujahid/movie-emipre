import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";
import FileDetails from "./components/FileDetails";
import SignIn from "./components/SignIn"; // Import your SignUp component
import Home from "./components/Home";
import './App.css'

function App() {
  const isAuthenticated = false; // You can set this to true when the user is authenticated

  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/files" element={<FileList />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/file/:id" element={<FileDetails />} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
      </div>
    
    </Router>
  );
}

export default App;
