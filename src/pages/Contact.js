import React from "react";
import Icon from "../components/Icon";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

function Contact() {
    return (
        <React.Fragment className="Contact">
            <Navbar />
            <Icon name="Contact"/>
            <h1>Contact</h1>
            <h2>Business</h2>
            <a href="https://github.com/raiga0310">GitHub</a>
            <br />
            <a href="https://qiita.com/raiga0310">Qiita</a>
            <h2>Social</h2>
            <a href="https://twitter.com/ahoxa1rx">Twitter</a>
            <nav>
                <Link to="/">top</Link>
            </nav>
        </React.Fragment>
    );
}

export default Contact;