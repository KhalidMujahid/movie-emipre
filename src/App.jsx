import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";
import FileDetails from "./components/FileDetails";
import SignIn from "./components/SignIn"; // Import your SignUp component
import Home from "./components/Home";
import "./App.css";
import { AuthProvider } from "./context/auth";
import ProctedRoute from "./components/ProctedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/file/:id" element={<FileDetails />} />

          <Route element={<ProctedRoute />}>
            <Route path="/files" element={<FileList />} />
            <Route path="/upload" element={<FileUpload />} />
          </Route>

          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
