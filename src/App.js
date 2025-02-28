import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
      <Route path="*" element={<Navigate to="/" />} /> {/* إعادة التوجيه إلى Home عند مسار غير معروف */}

        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
       
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
