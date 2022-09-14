import React from "react";
import {LoudspeakerDto} from "../classes/loudspeaker.dto";
//na Me sprejmem podatke-user, ta tip user bo tudi objekt
//Wrapperja tukaj ne rabimo, ker ga imamo drugje

const Loudspeaker = ({loudspeaker}:{loudspeaker: LoudspeakerDto}) => {
    return (
        <>
            <h1>Podatki o zvočniku</h1>
            <h3>Model: {loudspeaker.model_name}</h3>
            <h3>Opis: {loudspeaker.description}</h3>
            <h3>Podjetje: {loudspeaker.company}</h3>
            <h3>Frekvenčni obseg: {loudspeaker.frequency_range}</h3>
            <h3>Moč: {loudspeaker.power}</h3>
            <h3>Občutljivost: {loudspeaker.sensitivity}</h3>
            <h3>Lomne frekvence: {loudspeaker.refractive_frequency}</h3>
        </>
    );
}

export default Loudspeaker;

