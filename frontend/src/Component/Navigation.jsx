import "../Styles/Components/Navigation.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {

    return(
        <div className="nav-bar">
            <form action="post" className="form">
            <div className="job-container">
                <label htmlFor="job">Quoi?</label>
                <input type="text" name="job" placeholder="Métier,entreprise" id="job-input"/>
            
            </div>
            
            <div className="location-container">
                <label htmlFor="location">Ou?</label>
                <input type="text" name="location" placeholder="ville, département, code postal" id="location-input" />
            </div>

                <button className="submit-button"><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></button>

            </form>
        </div>
    )
}

export default Navigation;  