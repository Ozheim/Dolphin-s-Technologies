import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames'; 
import FooterTransitionDown from "../utils/FooterTransitonDown";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "../Styles/Components/FooterTransition.scss";
import "../Styles/Pages/HeadHunter.scss";

const HeadHunter = () => {
    const location = useLocation();

    useEffect(() => {
        FooterTransitionDown();
    }, []);

    const isHeadhunterPage = location.pathname === '/HeadHunter';

    return (
      <div>
        <Header className={classNames({ 'header-red': isHeadhunterPage, 'header': !isHeadhunterPage })} />
    
        <Footer className={classNames({ 'ocean-red': isHeadhunterPage, 'ocean': !isHeadhunterPage })} isHeadhunterPage={isHeadhunterPage} />
      </div>
    );
};

export default HeadHunter;
