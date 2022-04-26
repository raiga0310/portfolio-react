import React from "react";
import Icon from "../components/Icon";
import Navbar from "../components/Navbar";

function Works() {
    return (
        <React.Fragment className="Works">
            <Navbar />
            <Icon name="Works" />
            <h3>Works</h3>
            <ul>
                <li>This portfolio</li>
                <li><a href="https://github.com/raiga0310/Ageha">Weather Notification</a></li>
            </ul>
        </React.Fragment>
    );
}

export default Works;