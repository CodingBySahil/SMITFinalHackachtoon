import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./firebase/AuthContext";
import Board from "./components/Board";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import Navbar from "./components/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <AuthProvider>
              <Navbar/>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Board />
                            </PrivateRoute>
                        }
                    />
                </Routes>
                <Footer/>
            </AuthProvider>
        </Router>
    );
}

export default App;
