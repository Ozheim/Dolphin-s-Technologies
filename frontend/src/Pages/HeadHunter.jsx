import FooterTransitionDown from "../utils/FooterTransitonDown";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "../Styles/Components/FooterTransition.scss";
import React, { useEffect } from 'react';


const HeadHunter = () =>{
    useEffect(() => {
        FooterTransitionDown();
    }, []);

       return(
    <div>
        <Header/>
        <Footer/>
    </div>
    )   
}


export default HeadHunter;