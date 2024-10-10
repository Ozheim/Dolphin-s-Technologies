import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Notfound from "./Pages/Notfound.jsx";
import Login from "./Pages/Login.jsx";
import SignIn from "./Pages/SignIn.jsx";



const AppRouter = () => {
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="*" element={<Notfound />}/>
        </Routes>

)
}

export default AppRouter;