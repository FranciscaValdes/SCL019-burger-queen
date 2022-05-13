import { useState } from "react";
import "./css/menuViews.css";
import Desayuno from "./Desayuno";
import Burguers from "./Burguers";
import Accompaniments from "./Accompaniments";
import Drinks from "./Drinks";
import Logo from "../imagenes/logobq.png";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// 
export default function MenuButtons() {
    const [menuState, setmenuState] = useState(1);

    const menuValue = (index) => {
        setmenuState(index);
    };

    return (
        <div>
            <header className="header" >
                <img src={Logo} alt="logo restaurant burger queen" className="logo-bq"></img>
            </header>
            <div className="conteiner-menu-options">
                <div className="options-menu">

                    <Button
                        variant="outline-success btn-lg"
                        className={
                            menuState === 1 ? "active-products" : "products"
                        }
                        onClick={() => menuValue(1)}
                    >
                        <h3 className="menu-titles">
                            Desayuno
                        </h3>
                    </Button>

                    <Button
                     variant="outline-success btn-lg"
                        className={
                            menuState === 2 ? "active-products" : "products"
                        }
                        onClick={() => menuValue(2)}
                    >

                        <h3 className="menu-titles">
                            Burguers
                        </h3>

                    </Button>

                    <Button
                     variant="outline-success btn-lg"
                        className={
                            menuState === 3 ? "active-products" : "products"
                        }
                        onClick={() => menuValue(3)}
                    >

                        <h3 className="menu-titles">
                            Accompaniments
                        </h3>

                    </Button>

                    <Button
                     variant="outline-success btn-lg"
                        className={
                            menuState === 4 ? "active-products" : "products"
                        }
                        onClick={() => menuValue(4)}
                    >

                        <h3 className="menu-titles">
                            Drinks
                        </h3>

                    </Button>

                </div>

                <div className={menuState === 1 ? "content  active-content" : "content"}>
                    <Desayuno />
                </div>

                <div className={menuState === 2 ? "content  active-content" : "content"}>
                    <Burguers />
                </div>

                <div className={menuState === 3 ? "content  active-content" : "content"}>
                    <Accompaniments />
                </div>

                <div className={menuState === 4 ? "content  active-content" : "content"}>
                    <Drinks />
                </div>
            </div>
        </div>
    )
}