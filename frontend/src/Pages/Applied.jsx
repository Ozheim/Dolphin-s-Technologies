import "../Styles/Pages/Applied.scss";

const Applied = () => {
  return (
    <div className="applied-container">
      <div className="message">
        <h1>Merci pour votre Candidature !</h1>
        <p>Nous avons bien reçu votre candidature et vous contacterons prochainement.</p>
        <button onClick={() => window.location.href = '/'}>Revenir au menu</button>
      </div>
    </div>
  );
}

export default Applied;
