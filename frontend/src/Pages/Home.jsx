import Header from "../Component/Header.jsx"
import Navigation from "../Component/Navigation.jsx";
import Footer from "../Component/Footer.jsx";
import JobsList from "../Component/JobsList.jsx";

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <JobsList />
            <Footer />
        </div>
    );
}

export default Home;
