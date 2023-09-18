import React, { Component } from "react";
import '../styles.css';


class Footer extends Component {

    render() {
        return (
            <nav className="footer" style={{ backgroundColor: `#90ba64` }}>
                <p> © 2023 Sadorian Robertson. All rights reserved. Made with React.</p>
            </nav>
        );
    };
}

export default Footer;
