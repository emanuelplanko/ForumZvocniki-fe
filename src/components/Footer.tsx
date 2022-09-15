import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="text-muted py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Ljubitelji hifi zvočnikov</p>
                    <p className="mb-0">Novi na naši spletni strani <a href="/">Pojdite na domačo stran</a> ali pa <a
                        href='/create_loudspeaker_posts'>Ustvarite svojo lastno objavo o zvočnikih</a>.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;