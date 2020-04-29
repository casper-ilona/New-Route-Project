import React, { Component } from "react";
import styles from "./Information.module.css";


export class Information extends Component {
    render() {
        return (
            <div className={styles.information}>
                <h1> Information </h1>
                <p>
                    Any text
                </p>
            </div>
        );
    }
}
