import React from "react";
import axios from "axios";

interface CardProps{
    cardData: any
    hideControls?: boolean;
    showMoreInfo?: boolean;
}

//{!hideControls && <img src={require('../img.jpg')} alt="Thumbnail" />}

const Card = ({cardData, hideControls, showMoreInfo}: CardProps) => {
    //console.log(cardData);


    const LoudspeakerDelete = async () => {

        const res = await axios.delete(`http://localhost:8080/loudspeaker/${cardData.id}`,{withCredentials:true});

        if (res.status == 201) {
            window.location.reload()
        }
    }
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        {!hideControls && <img src="loudspeakers1.png" alt="Thumbnail" />}
                        <h5>
                            {showMoreInfo && <>Model: </>}
                            {cardData.model_name}
                        </h5>
                        <p className="card-text">{showMoreInfo && <>Opis: </>}{cardData.description}</p>
                        { showMoreInfo && <p>POdjetje: {cardData.company}</p>}
                        { showMoreInfo && <p>Frekvenčni obseg(Hz): {cardData.frequency_range}</p>}
                        { showMoreInfo && <p>Moč(Watt): {cardData.power}</p>}
                        { showMoreInfo && <p>Občutljivost(dB): {cardData.sensitivity}</p>}
                        { showMoreInfo && <p>Lomne frekvence(Hz): {cardData.refractive_frequency}</p>}
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {!hideControls && <a href={"/objava/"+cardData.id}><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>}

                                {!hideControls && <a href={"/loudspeaker_update/"+cardData.id}><button type="button" className="btn btn-sm btn-outline-secondary">Edit</button></a>}

                                {!hideControls && <button type="button" className="btn btn-sm btn-outline-secondary" onClick={LoudspeakerDelete}>Delete
                                </button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

//{ showExtraInfo && <p>Model Name: {cardData?.modelName}</p>}

/*
const Card = ({cardData}:{cardData:any}) => {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div className="card-body">
                        <h5>{cardData.model_name}</h5>
                        <p className="card-text">{cardData.company}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary"><a href='/loudspeaker' className="btn btn-primary my-2">View</a>
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Delete
                                </button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
*/


/*
 <h5>
                            {showMoreInfo && <>Model: </>}
                            {cardData.model_name}
                        </h5>
                        <p className="card-text">{showMoreInfo && <>Company: </>}{cardData.company}</p>
                        { showMoreInfo && <p>Opis: {cardData.description}</p>}
                        { showMoreInfo && <p>Podjetje: {cardData.power}</p>}
                        { showMoreInfo && <p>Frekvenčni obseg(Hz): {cardData.power}</p>}
                        { showMoreInfo && <p>Moč(Watt): {cardData.power}</p>}
                        { showMoreInfo && <p>Občutljivost(dB): {cardData.power}</p>}
                        { showMoreInfo && <p>Lomne frekvence: {cardData.power}</p>}
 */


export default Card;