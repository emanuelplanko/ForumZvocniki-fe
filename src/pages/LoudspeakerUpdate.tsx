import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import './Common.css';

//styTextarea je spremenljivka, nastavimo jo spodaj vključno z rows
const styleTextarea = {
    height:"100%",
}

const LoudspeakerPost = () => {
    //useState shranjuje vrednost spremenljivke
    const[error, setError] = useState('');
    const[model_name, setModel_name] = useState('');
    const[description,setDescription] = useState('');
    const[company,setCompany] = useState('');
    const[frequency_range,setFrequency_range] = useState('');
    const[power,setPower] = useState('');
    const[sensitivity,setSensitivity] = useState('');
    const[refractive_frequency,setRefractive_frequency] = useState('');
    const[content,setContent] = useState('');
    const[redirect,setRedirect] = useState(false);
    //zadnji del
    const {id} = useParams()
    //v to spremenljivko jih bomo shranili
    //[]-array, ker bo noter več podatkov, ne samo eden

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            model_name,
            description,
            company,
            frequency_range,
            power,
            sensitivity,
            refractive_frequency
        }

        console.log(data);

        const res = await axios.put(`http://localhost:8080/loudspeaker/${id}`,data,{withCredentials:true});

        if (res.status == 201) {
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to='/' />;
    }

    return (
        <>
            <h2>{error}</h2>
            <h1>Update a post</h1>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Model"
                           onChange={(e) => setModel_name(e.target.value)}/>
                    <label htmlFor="floatingInput">Model</label>
                </div>



                <div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Opis"
                              onChange={(e)=>setDescription(e.target.value)}>
                    </textarea>
                    <label htmlFor="floatingContent">Opis</label>
                </div>



                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Podjetje"
                           onChange={(e) => setCompany(e.target.value)}/>
                    <label htmlFor="floatingSelect">Podjetje</label>
                </div>


                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Frekvenčni obseg"
                           onChange={(e) => setFrequency_range(e.target.value)}/>
                    <label htmlFor="floatingSelect">Frekvenčni obseg(Hz)</label>
                </div>



                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Moč"
                           onChange={(e) => setPower(e.target.value)}/>
                    <label htmlFor="floatingSelect">Moč(Watt)</label>
                </div>


                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Občutljivost"
                           onChange={(e) => setSensitivity(e.target.value)}/>
                    <label htmlFor="floatingSelect">Občutljivost(dB)</label>
                </div>


                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="Lomne frekvence"
                           onChange={(e) => setRefractive_frequency(e.target.value)}/>
                    <label htmlFor="floatingSelect">Lomne frekvence(Hz)</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
            </form>
        </>
    )
}

/*<div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Vnesi vsebino"
                              onChange={(e)=>setContent(e.target.value)}>
                    </textarea>
    <label htmlFor="floatingContent">Vsebina</label>
</div>*/

export default LoudspeakerPost;