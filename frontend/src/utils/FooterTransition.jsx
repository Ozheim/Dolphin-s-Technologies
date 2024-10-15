import "../Styles/Components/FooterTransition.scss";


function FooterTransition (path) {

        const oceanElement = document.querySelector('.ocean');
        oceanElement.classList.add('wave-up');
        if (oceanElement) {
            setTimeout(() => {
                window.location.pathname = "/" + path
            }, 800);
        }
}
export default FooterTransition;

