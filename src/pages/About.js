import React from "react";
import Icon from "../components/Icon";
import Navbar from "../components/Navbar";
import "./About.css";

function About() {
    return (
        <React.Fragment className="About">\
            <Navbar />
            <Icon name="About"/>
            <h1>About </h1>
            <h2>profile</h2>
            <ul>
                <li><h3>Name</h3></li>Raiga Sasayama
                <li><h3>Date of birth</h3></li>10th Mar., 2003
                <li><h3>Place of Birth</h3></li>Aichi pref., Japan
                <li><h3>Belonging</h3></li>NIT. Toyota College
                <li><h3>Department</h3></li>Information and Computer Engineering
            </ul>
        </React.Fragment>
    );
}

export default About;