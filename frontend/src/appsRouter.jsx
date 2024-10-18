import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Notfound from "./Pages/Notfound.jsx";
import Login from "./Pages/Login.jsx";
import SignIn from "./Pages/SignIn.jsx";
import HeadHunter from "./Pages/HeadHunter.jsx";
import AdminDashboard from './Pages/AdminDashboard.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';
import SigninHeadHunter from "./Pages/signinHeadHunter.jsx";
import CreateOffer from "./Pages/CreateOffer.jsx";
import Emploi from "./Pages/emploi.jsx";
import ApplyPage from "./Pages/ApplyPage.jsx";
import PrivateRoute from './utils/PrivateRoute.jsx';
import Applied from "./Pages/Applied.jsx";

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/HeadHunter" element={<HeadHunter />} />
            <Route path="/UserDashBoard" element={< UserDashboard />} />
            <Route path="/signinHeadHunter" element={<SigninHeadHunter />} />
            <Route path="/Emploi" element={<Emploi />} />

            <Route
                path="/CreateOffer"
                element={
                    <PrivateRoute roleRequired="headhunter">
                        <CreateOffer />
                    </PrivateRoute>
                }
            />
            <Route
                path="/admin/dashboard"
                element={
                    <PrivateRoute roleRequired="admin">
                        <AdminDashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/Applied"
                element={
                    <PrivateRoute roleRequired="user">
                        <Applied />
                    </PrivateRoute>
                }
            />
            <Route
                path="/ApplyPage"
                element={
                    <PrivateRoute roleRequired="user">
                        <ApplyPage />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}

export default AppRouter;
