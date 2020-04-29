import React, {Component} from "react";
import styles from './AboutUs.module.css';

export class AboutUs extends Component {
    render() {
        return (
            <div className={styles.aboutUs}>
                <h1> About us </h1>
                <p>
                    Any text
                </p>
            </div>
        );
    }
}
