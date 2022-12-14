import React from "react";


interface CommentProps{
    commentData: any
}

const Comment = ({commentData}: CommentProps) => {
    console.log(commentData);
    return(
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p>{commentData.komentar}</p>
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



export default Comment;