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
<<<<<<< HEAD
import Test from "./Component/test.jsx"
 
 
 
=======
import ApplyPage from "./Pages/ApplyPage.jsx";



>>>>>>> b26c258ee264ceab8faa815041c3e4ce95eb4b94
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
<<<<<<< HEAD
=======
            <Route path="/ApplyPage" element={<ApplyPage/>}/>
>>>>>>> b26c258ee264ceab8faa815041c3e4ce95eb4b94
            <Route path ="/Emploi" element={<Emploi />}/>
            <Route path ="/Test" element={<Test />}/>
 
        </Routes>
 
)
}
 
export default AppRouter;
 