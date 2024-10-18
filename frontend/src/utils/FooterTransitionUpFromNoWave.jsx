function FooterTransitionNoWave(path, navigate) {
    const oceanElement = document.querySelector('.ocean');
    const footer = document.querySelector(".footerOnJobPages");

    if (footer) {
        footer.classList.remove('hidden-footer');
    }

    if (oceanElement) {
        oceanElement.classList.remove('wave-up', 'down');
        oceanElement.classList.add('wave-up');

        setTimeout(() => {
            navigate("/" + path);
            oceanElement.classList.remove('wave-up');
        }, 800);
    }
}

export default FooterTransitionNoWave;
