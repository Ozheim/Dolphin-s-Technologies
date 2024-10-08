import { Routes, Route, Navigate } from "react-router-dom";
import react from "react";
import Home from "./Pages/Home.jsx";


const AppRouter = () => {
    <Routes>
        <Route path="/Home" element={<Home />}/>
    </Routes>

}