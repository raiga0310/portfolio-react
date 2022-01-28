import React from "react";
import About from '../assets/About.svg';
import Contact from '../assets/Contact.svg'
import Works from '../assets/Works.svg'

function Icon(props) {
    const iconName =
        {
            "About": About,
            "Contact": Contact,
            "Works": Works,
        }[props.name]
    return (
        <div className={"Icon"}>
            <img src={iconName} alt={props.name} width="50px" height="50px"/>
        </div>
    )
}

export default Icon;