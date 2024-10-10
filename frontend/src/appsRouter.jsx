import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Notfound from "./Pages/Notfound.jsx";
import Login from "./Pages/Login.jsx";
import SignIn from "./Pages/SignIn.jsx";

const AppRouter = () => {
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="*" element={<Notfound />}/>
        </Routes>

)
}

export default AppRouter;