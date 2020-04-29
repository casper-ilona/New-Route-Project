import React, { Component } from "react";
import styles from './HomePage.module.css';


export class HomePage extends Component {
    render() {
        return (
            <div className={styles.homepage}>
                <h1> Home Page </h1>
                <p>
                    Any text
                </p>
            </div>
        );
    }
}
