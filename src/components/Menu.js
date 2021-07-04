import React from "react";
import Card from "./Card";
import "./Menu.css"

class Menu extends React.Component {
    render() {
        return (
            <div className={"Menu"}>
                <Card name={"About"} />
                <Card name={"Contact"} />
                <Card name={"Works"} />
            </div>
        );
    }
}

export default Menu;