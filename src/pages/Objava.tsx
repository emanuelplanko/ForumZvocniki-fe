import React, {SyntheticEvent, useEffect, useState} from "react";
import {Params, useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Loudspeaker from "./Loudspeaker";

const styleTextArea = {
    height:"100%"
}

const Objava = () => {

    const[cardData,setCards] = useState([]);
    const[replies,setReplies] = useState([]);
    const { id } = useParams();

    const[error, setError] = useState('');
    const[komentar, setKomentar] = useState('');
    const[content, setContent] = useState('');
    const[redirect, setRedirect] = useState(false);
    const[categories, setCategories] = useState([]);
    const[categorySelected, setCategorySelected] = useState(1);

    const loadLoudspeakers = async () => {
        const res = await axios.get('http://localhost:8080/loudspeaker/'+id, {withCredentials: true});
        if (res.status == 200){
            setCards(res.data);
        }
    }




    console.log(replies)




    useEffect(() => {
        loadLoudspeakers();
    }, []);

    const loadKomentarji = async () => {
        const res = await axios.get('http://localhost:8080/komentarji/' + id, {withCredentials: true});
        if (res.status == 200){
            setReplies(res.data);
        }
    }

    useEffect(() => {
        loadKomentarji();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            komentar
        }

        const res = await axios.post('http://localhost:8080/komentarji', data, { withCredentials: true });

        if(res.status == 201){
            setRedirect(true);
        }

    }

    if(redirect){
        window.location.reload();
        //return <Navigate to={'/thread/' + id}/>
    }

    if(cardData) {
        return (
            <>
                <Card cardData={cardData} hideControls={true} showMoreInfo={true}/>

                {replies.length > 0 && replies.map((komentar: any, i) => {
                    return <Card cardData={komentar} key={i} hideControls={true}/>
                })
                }

                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">

          <textarea className="form-control" id="floatingContent"
                    rows={8}
                    style={styleTextArea}
                    placeholder="Vnesi komentar"
                    onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                        <label htmlFor="floatingContent">Komentar</label>

                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>

            </>
        );
    }




















  /*  if(cardData) {
        return (
            <>
                <Card cardData={cardData} hideControls={true}
                      showMoreInfo={true}/>

                <form onSubmit={submit} className="form-signin w-100 m-auto">
                    <div className="form-floating">

          <textarea className="form-control" id="floatingContent"
                    rows={8}
                    style={styleTextArea}
                    placeholder="Vnesi komentar"
                    onChange={(e)=>setContent(e.target.value)}>
          </textarea>
                        <label htmlFor="floatingContent">Komentar</label>

                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
                </form>

            </>
        );
    }*/

    return (
        <>

        </>
    );

}

export default Objava;