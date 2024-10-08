import { Routes, Route, Navigate } from "react-router-dom";
import react from "react";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";

const AppRouter = () => {
    <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>

}