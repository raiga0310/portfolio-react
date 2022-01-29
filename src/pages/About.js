import React from "react";
import Icon from "../components/Icon";
import "./About.css";

function About() {
    return (
        <div className="About">
            <Icon name="About"/>
            <h3>About </h3>
            <h2>profile</h2>
            <ul>
                <li><h3>Name</h3></li>Raiga Sasayama
                <li><h3>Date of birth</h3></li>10th Mar., 2003
                <li><h3>Place of Birth</h3></li>Aichi pref., Japan
                <li><h3>Belonging</h3></li>NIT. Toyota College
                <li><h3>Department</h3></li>Information and Computer Engineering
            </ul>
        </div>
    )
}

export default About;