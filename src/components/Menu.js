import React from "react";
import Card from "./Card";
import "./Menu.css"

function Menu() {
    return (
        <div className={"Menu"}>
            <Card name={"About"}/>
            <Card name={"Contact"}/>
            <Card name={"Works"}/>
        </div>
    );
}

export default Menu;