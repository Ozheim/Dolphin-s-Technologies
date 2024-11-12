import "../Styles/Pages/signin.scss"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
    const Navigate = useNavigate()

   useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.style.margin = "0";
        htmlElement.style.overflow = "hidden";

 
        return () => {
            htmlElement.style.margin = "";
            htmlElement.style.overflow = "";
        };
    }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const signUp = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios({
        method: "post",
        url: "https://app-70e64c03-d572-47f0-a6ce-b6f9fafb2837.cleverapps.io/api/createUsers",
        data: { name, email, password },
      })
      localStorage.setItem("huntertoken", response.data.huntertoken);
      console.log("user log");
      Navigate("/Login");

      

    } catch (error) {
      console.log("erreur : ", error)
    }
  }

 return (
  <div>
    <Header />
    <div className="container-signin">
      <div className="wrapper-signin">
        <form className="signin-form">
          <h1 className="signin-title">Inscription</h1>
          
          <div className="input-group">
            <label className="input-label" htmlFor="userName">Nom d'utilisateur</label>
            <input type="text" id="userName" name="userName" className="signin-input" onChange={(e) => setName(e.target.value)} />
          </div>
          
          <div className="input-group">
            <label className="input-label" htmlFor="userEmail">E-mail</label>
            <input type="text" id="userEmail" name="userEmail" className="signin-input" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          
          <div className="input-group">
            <label className="input-label" htmlFor="userPassword">Mot de passe</label>
            <input type="password" id="userPassword" name="userPassword" className="signin-input" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <div className="check-input">
            <input type="checkbox" name="checked" id="checked" required />
            <span className="checkbox-label">Cochez pour accepter les termes et conditions</span>
          </div>
          
          <button type="submit" className="signin-button" onClick={signUp}>GO !</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);
};


export default SignIn;