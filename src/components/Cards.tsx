import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
    const[cards,setCards] = useState([]);

    //loadCards je funkcija, ki bo šla v bazo in ven potegnala vse karte in jih napolnala, mora pa biti asinhrona
    const loadCards = async () => {
        const res = await axios.get('http://localhost:8080/loudspeaker/loudspeakers',{withCredentials: true});
        if (res.status === 200) {
            console.log(res.data);
            setCards(res.data);
        }
    }

    useEffect(()=>{
        loadCards();
    },[]);

    //any-atribut
    //funkcija
    if(cards.length>0) {
        return (
            <>
                {cards.map((card: any, i) => {
                    console.log(card);
                    return <Card cardData={card} key={i} />;
                })
                }
            </>
        );
    }

    return (
        <h1>Ni objav</h1>
    );


}

export default Cards;