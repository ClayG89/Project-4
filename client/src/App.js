import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import TruckList from "./components/TruckList";
import Truck from "./components/Truck";
import LoadList from "./components/LoadList";
import Load from "./components/Load";
import DispatchList from "./components/DispatchList";
import Dispatch from "./components/Dispatch";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>{Providence}</h1>
                        <div>
                            <div><Link to="/">All Trucks</Link></div>
                            <div><Link to="/">All Loads</Link></div>
                            <div><Link to="/">All Dispatch</Link></div>
                        </div>
                    </div>

                    <Switch>
                      <Route exact path="/" component={TruckList}/>
                      <Route path="/truck/:id" component={Truck}/>
                      <Route exact path="/" component={LoadList}/>
                      <Route path="/load/:id" component={Load}/>
                      <Route exact path="/" component={DispatchList}/>
                      <Route path="/dispatch/:id" component={Dispatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
