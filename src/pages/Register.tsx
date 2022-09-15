import React, {SyntheticEvent, useState} from "react";

import axios from 'axios';
import {Navigate} from "react-router-dom";

import './Register.css';

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Register = () => {
    //stati pomennijo, da nam neka spremenljivka hrani neko vrednost
    //setFirstName-ime funkcije s pomočjo katere nastavljamo vrednost spremenljivke
    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    //errorText za spodaj pri html
    const[errorText, setErrorText] = useState('');

    //da npr. vedno redirekta na login
    //spodaj pri prvem if stavku
    //po defaultu ne redirecta
    const[redirect, setRedirect] = useState(false);

    //nova funkcija submit
    //type-submit spodaj
    //SyntheticEvent-umetni submit
    //e.preventDefault-da naj se ne zgodi to kar bi se po defaultu zgodilo v html, če nekdo klikne na gumb submit
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            first_name,
            last_name,
            email,
            password
        }
       //v console.log(data) se dajo najprej podatki
        console.log(data);
        //prek spremenljivke res bom poslal podatke na moj strežnik, strežnik pa bo vrnil podatke
        //data axiosu pove kaj naj pošlje, url pa kam naj pošllje
        const res = await axios.post('http://localhost:8080/auth/register',data);
        //v console.log(res) se da rezultat responsa, kar mi bo strežnik nazaj vrnil
        console.log(res);

        //201 pomeni, da je šlo vse skozi
        if (res.status == 201) {
            //uspešno kreiran user, preusmerim ga na login
            setRedirect(true);
        }

        //FIXME backend s try - catch v primeru errorja
        //lahko bi namesto if dali tudi else
        if (res.status != 201) {
            setErrorText('Napaka v podatkih');
            //console.log(errorText);
        }

    }

    //če je redirect true, se izvrši spodnja koda
    if (redirect) {
        return <Navigate to='/login' />
    }

    //onChange
    //form onSubmit
    return (
        <>
            <h2>{errorText}</h2>
            <h1>Registracija</h1>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingFirstName"
                           placeholder="First name"
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <label htmlFor="floatingFirstName">First name</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingLastName"
                           placeholder="Last name"
                           onChange={(e) => setLastName(e.target.value)}/>
                    <label htmlFor="floatingLastName">Last name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput"
                           placeholder="name@example.com"
                           onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;