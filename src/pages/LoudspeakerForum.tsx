import React from "react";
const LoudspeakerForum = () => {


    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Forum o zvočnikih</h1>
                        <p className="lead text-muted">Kraj kjer se zbirajo in debatirajo ljubitelji hifi</p>
                        <p>
                            <a href='/create_loudspeaker_posts' className="btn btn-primary my-2">Ustvari objavo o zvočnikih</a>
                            <a href='/' className="btn btn-secondary my-2">Preglej objave o zvočnikih</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default LoudspeakerForum;