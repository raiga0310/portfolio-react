import {Link} from "react-router-dom";
import React from "react";

function Navbar() {
    return (
        <nav>
            <Link to="About">About</Link>
            <Link to="Contact">Contact</Link>
            <Link to="Works">Works</Link>
        </nav>
    );
}

export default Navbar();