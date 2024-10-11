import FooterTransitionDown from "../utils/FooterTransitonDown";
import Footer from "../Component/Footer";
import "../Styles/Components/FooterTransition.scss";
import React, { useEffect } from 'react';


const HeadHunter = () =>{
    useEffect(() => {
        FooterTransitionDown();
    }, []);

       return(
    <div>
        <Footer/>
    </div>
    )   
}


export default HeadHunter;