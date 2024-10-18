import "../Styles/Components/FooterTransition.scss";

function FooterTransition(path) {
    const oceanElement = document.querySelector('.ocean');

    if (oceanElement) {
        oceanElement.classList.remove('wave-up', 'down');
        oceanElement.classList.add('wave-up');

        setTimeout(() => {
            window.location.pathname = "/" + path;
            oceanElement.classList.remove('wave-up');
        }, 800);
    }
}

export default FooterTransition;

