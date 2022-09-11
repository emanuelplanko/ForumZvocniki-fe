import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

//ustvaril se je nov podatkovni tip, ki pričakuje samo en parameter, to je children, ki naj bo JSX.Element-to pomeni, da bo to nova komponenta, nov page
//to bom dobil, kot parameter in vedno, ga bom v sredini izpisoval
type Props = {
    children: JSX.Element,
};
const Wrapper = ({ children }: Props) => {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Wrapper;