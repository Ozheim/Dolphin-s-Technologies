import "../Styles/Components/FooterTransition.scss";

const FooterTransitionDown = () => {
    const oceanElement = document.querySelector('.ocean');

    if (oceanElement) {
        oceanElement.classList.remove('wave-up', 'down');
        oceanElement.classList.add('down');
    }
}

export default FooterTransitionDown;
