import React, { Component } from "react";
import styles from "./Home.module.css";


export class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
                <h1> Home  </h1>
                <p>
                    Looking for: {this.props.match.params.param1}
                </p>
                <p>
                    All props: {JSON.stringify(this.props.match, null, 4)}
                </p>
            </div>
        );
    }
}
