import "../Styles/Components/navigation.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useState } from 'react';

const Navigation = () => {
    const [locationValue, setLocationValue] = useState(null);

    return (
        <div className="nav-bar">
            <form action="post" className="form">
                <div className="job-container">
                    <label htmlFor="job">Quoi?</label>
<<<<<<< HEAD
                    <input type="text" name="job" placeholder="Métier,entreprise" id="job-input" />

                </div>

                <div className="location-container">
                    <label htmlFor="location">Ou?</label>
                    <input type="text" name="location" placeholder="ville, département, code postal" id="location-input" />
=======
                    <input type="text" name="job" placeholder="Métier, entreprise" id="job-input" />
>>>>>>> 8213e2af8e9ed9b0dd0612d3ba782ce2819e518e
                </div>

                <div className="location-container">
                    <label htmlFor="location">Où?</label>

                   <div className="caca"><GooglePlacesAutocomplete 
                        apiKey="AIzaSyBLQHEUDRQywbFjk2I0rEaC3tfNwo6r8Go"
                        selectProps={{
                            locationValue,
                            onChange: setLocationValue,
                            placeholder: "Ville, département, code postal"
                        }}
                    />
                </div>
                </div>
                <button className="submit-button"><i><FontAwesomeIcon icon={faMagnifyingGlass} /></i></button>
            </form>
        </div>
    );
};

export default Navigation;