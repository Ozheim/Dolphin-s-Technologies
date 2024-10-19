import "../Styles/Components/FooterTransition.scss";

function FooterTransition(path, navigate) {
    const oceanElement = document.querySelector('.ocean');

    if (oceanElement) {
        oceanElement.classList.remove('wave-up', 'down');
        oceanElement.classList.add('wave-up');

        setTimeout(() => {
            oceanElement.classList.remove('wave-up');
            navigate("/" + path)
        }, 800);
    }
}

export default FooterTransition;


