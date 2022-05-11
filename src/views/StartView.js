import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imagenes/logobq.png";
import Mesero from "../imagenes/rubber-welcome-5.png";
import Chef from "../imagenes/taxi-chef.png";


const StartView = () => {
    return (
        <div className="container-start">
            <div className="logo-start">
                <img src={Logo} alt="logo burger-queen" className="logoStartBQ" />
            </div>
            <div className="links-start">
                <Link to="/tables" className="link"><img src={Mesero} alt="logo burger-queen" className="logoStart" />Mesas</Link>
                <Link to="/kitchen" className="link"><img src={Chef} alt="logo burger-queen" className="logoStart" />Cocina</Link>

            </div>
        </div>

    )
}

export default StartView;