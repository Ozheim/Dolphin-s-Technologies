import React, { useState, useEffect,useContext } from 'react';
import axios from "axios";

const parameterProfil = () => { 
    const [userInfo, setUserInfo] = useState();
    const UserId = localStorage.getItem('userId'); 

    useEffect(() => {
        const fetchParams = async () => {
            try {
               const response=  axios.get(`http://localhost:5000/api/users/${UserId}`);
                setUserInfo(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Erreur lors de la récupération ", error);
            }
        };
       
            fetchParams();
    }, []);
    
    return (
        <div>
            {userInfo ? (
                <div>
                    
                    <h1>{userInfo.name}</h1>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};



export default parameterProfil;