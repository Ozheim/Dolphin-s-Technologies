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
          <div className="name">
            <label for="userName">Nom d'utilisateur</label>
            <input type="text" id="userName" name="userName" />
          </div>
          <div className="password">
            <label for="userPassword">Mot de passe</label>
            <input type="text" id="userPassword" name="userPassword" />
          </div>
          <div className="email">
            <label for="userEmail">E-mail</label>
            <input type="text" id="userEmail" name="userEmail" />
          </div>
          <div className="checko">
          <input type="checkbox" name="checked" id="checked" /> 
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