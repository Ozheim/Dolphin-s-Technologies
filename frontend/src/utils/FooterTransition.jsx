import { useNavigate } from 'react-router-dom';
import "../Styles/Components/FooterTransition.scss";
import { wind } from 'fontawesome';

function FooterTransition (path) {
        const oceanElement = document.querySelector('.ocean');
        oceanElement.classList.add('lol');
        if (oceanElement) {
            setTimeout(() => {
                window.location.pathname = "/" + path
            }, 2500);
        }
}
export default FooterTransition;
