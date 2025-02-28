import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // تأكد من إعداد Firebase بشكل صحيح
import { signInWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal"; // استيراد مكون النافذة المنبثقة

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setModalMessage("Login successful! Redirecting to home...");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/home"); // الانتقال إلى الصفحة الرئيسية
      }, 2000);
    } catch (error) {
      setModalMessage("Invalid email or password.");
      setShowModal(true);
    }
  };

  return (
    <div className="auth-page mt-5">
      <div className="card mt-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
  Don't have an account?  
  <button className="btn btn-link" onClick={() => window.location.href = "#/signup"}>
    Sign Up
  </button>
</p>

      </div>

      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Login;
