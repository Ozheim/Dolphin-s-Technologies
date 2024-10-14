import "../Styles/Pages/signin.scss"
import Header from "../Component/Header"
import Footer from "../Component/Footer"

const SignIn = () => {
    
    return (
        <div>
        <Header/>
        <div className="container">
          <form action="">
          <h1>Inscription</h1>
           <div className="email">
            <label for="userEmail">E-mail</label>
            <input type="text" id="userEmail" name="userEmail" required/>
          </div>
          <div className="password">
            <label for="userPassword">Mot de passe</label>
            <input type="text" id="userPassword" name="userPassword" required />
          </div>
          <div className="password">
            <label for="userPassword">confirmez le mot de passe </label>
            <input type="text" id="userPassword" name="userPassword" required/>
          </div>
         
          <div className="checko">
          <input type="checkbox" name="checked" id="checked" required /> 
          <span>Cochez pour accepter les termes et conditions</span>
          </div>
            <button type="sumbit">GO !</button>
          </form>
        </div>
        <Footer/>
      </div>
    );
};


export default SignIn;