import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import './Common.css';

//styTextarea je spremenljivka, nastavimo jo spodaj vključno z rows
const styleTextarea = {
    height:"100%",
}

const CreatePost = () => {
    //useState shranjuje vrednost spremenljivke
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content,setContent] = useState('');
    const[redirect,setRedirect] = useState(false);
    //zadnji del
    const[subjectSelected,setSubjectSelected] = useState(1);

    //v to spremenljivko jih bomo shranili
    //[]-array, ker bo noter več podatkov, ne samo eden
    const[subjects,setSubjects] = useState([]);

    // v req bom dobil vse subjecte, treba jih je shranit v spremenljivko, ki bo dostopna vsem ostalim
    const getSubjects = async () => {
        const req = await axios.get('http://localhost:8080/subject',{withCredentials:true});
        //nato pa nastavimo še setSubjects(req.data)
        setSubjects(req.data);
    }

    //useEffect je podobno kot useState, vendar se izvede le ob določenih spremembah in ne ves čas
    //v useEffectu bomo šli v bazo in bomo ven potegnali vse subjecte, ki jih imamo in jih bomo shranili v eno spremenljivko
    //spodaj kličemo getSubjects
    //useEffect se izvede prvič ko se stran naloži
    useEffect(() => {
        getSubjects();
    }, []);

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content,
            "subject_id":subjectSelected
        }

        console.log(data);

        const res = await axios.post('http://localhost:8080/post',data,{withCredentials:true});

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
            <h1>Create a post</h1>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="naslov"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="floatingInput">Naslov</label>
                </div>
                <div className="form-floating">
                    <select className="form-control" id="floatingSelect"
                            onChange={(e: any) => setSubjectSelected(e.target.value)}>
                        {subjects.map((subject:any, i) => {
                            return (<option value={subject.id} key={subject.id}>{subject.title}</option> );
                        })}

                    </select>
                    <label htmlFor="floatingSelect">Izberi predmet</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Vnesi vsebino"
                              onChange={(e)=>setContent(e.target.value)}>
                    </textarea>
                    <label htmlFor="floatingContent">Vsebina</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
            </form>
        </>
    )
}

export default CreatePost;