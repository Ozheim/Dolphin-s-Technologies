import "../Styles/Components/FooterTransition.scss";

const FooterTransitionDownJobPage = () => {
       const oceanElement = document.querySelector('.ocean');
    
    if (oceanElement) {
        oceanElement.classList.remove('wave-up', 'down');
        oceanElement.classList.add('downJobPage');
    }
}
        



export default FooterTransitionDownJobPage;







