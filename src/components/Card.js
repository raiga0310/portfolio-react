import React from "react";
import Icon from "./Icon";
import './Card.css'

function Card(props) {
    return (
        <div className={"Card"}>
            <Icon name={props.name}/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Card;