import React from "react";
import {UserDto} from "../classes/user.dto";



//na Me sprejmem podatke-user, ta tip user bo tudi objekt
//Wrapperja tukaj ne rabimo, ker ga imamo drugje
const Me = ({user}:{user: UserDto}) => {
    return (
        <>
            <h1 style={{textAlign: "center"}}>Tvoji podatki</h1>
            <h3 style={{textAlign: "center"}}>Ime: {user.first_name}</h3>
            <h3 style={{textAlign: "center"}}>Priimek: {user.last_name}</h3>
            <h3 style={{textAlign: "center"}}>Email: {user.email}</h3>
        </>
    );
}

export default Me;