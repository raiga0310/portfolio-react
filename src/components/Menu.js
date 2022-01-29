import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import "./Menu.css"


function Menu() {
    return (
        <div className={"Menu"}>
            <About/>
            <Contact />
            <Works />
        </div>
    );
}

export default Menu;