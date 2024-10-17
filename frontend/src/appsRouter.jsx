import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Notfound from "./Pages/Notfound.jsx";
import Login from "./Pages/Login.jsx";
import SignIn from "./Pages/SignIn.jsx";
import HeadHunter from "./Pages/HeadHunter.jsx";
import UserDashboard from './Pages/UserDashboard.jsx';
import SigninHeadHunter from "./Pages/signinHeadHunter.jsx";
import CreateOffer from "./Pages/CreateOffer.jsx";
import Emploi from "./Pages/emploi.jsx";
import ApplyPage from "./Pages/ApplyPage.jsx";



const AppRouter = () => {
    return(
 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="*" element={<Notfound />}/>
            <Route path="/HeadHunter" element={<HeadHunter />}/>
            <Route path="/UserDashBoard" element={< UserDashboard/>}/>
            <Route path="/signinHeadHunter" element={<SigninHeadHunter/>}/>
            <Route path="/CreateOffer" element={<CreateOffer/>}/>
            <Route path="/ApplyPage" element={<ApplyPage/>}/>
            <Route path ="/Emploi" element={<Emploi />}/>
 
        </Routes>
 
)
}
 
export default AppRouter;
 