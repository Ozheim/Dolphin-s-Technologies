import "../Styles/Pages/login.scss";
import Header from "../Component/Header"
import Footer from "../Component/Footer"

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <form action="">
        <h1>Connexion</h1>
        <div className="name">
          <label for="userName">Nom d'utilisateur</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <div className="password">
          <label for="userPassword">Mot de passe</label>
          <input type="text" id="userPassword" name="userPassword" />
        </div>
        <button type="sumbit">GO !</button>
        <p>
          Vous n'avez pas encore de compte ? <a href="signin">Inscrivez-vous</a>
        </p>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
