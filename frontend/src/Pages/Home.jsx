import Header from "../Component/Header.jsx"
import Navigation from "../Component/Navigation.jsx";
import Footer from "../Component/Footer.jsx";
import JobsList from "../Component/JobsList.jsx";
// import Fetch from "../Component/Fetch.jsx";


const Home = () => {


    return (
        <div>
            <Header />
            <Navigation />
            <JobsList />
            {/* <Fetch/> */}
            <Footer />


        </div>
    );
}

export default Home;

