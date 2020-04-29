import React from 'react';
import { BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import {HomePage} from "./HomePage/HomePage";
import {Information} from "./Information/Information";
import {Home} from "./Home/Home";
import {AboutUs} from "./AboutUs/AboutUs";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2> Pages </h2>
                    <ul>
                        <li><Link to="/google">HomePage</Link></li>
                        <li><Link to="/yandex">Information</Link></li>
                        <li><Link to="/explorer/123">Home</Link></li>
                        <li><Link to="/firefox">AboutUs</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/google" component={HomePage}/>
                        <Route path="/yandex" component={Information}/>
                        <Route path="/explorer/:param1" component={Home}/>
                        <Route path="/firefox" component={AboutUs}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
