import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import TruckList from "./components/TruckList";
import Truck from "./components/Truck";
import LoadList from "./components/LoadList";
import Load from "./components/Load";
import DispatchList from "./components/DispatchList";
import Dispatch from "./components/Dispatch";
import Homepage from "./components/Homepage";
import AdminForm from "./components/AdminForm"
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Providence Transport</h1>
                        <div>
                            <div><Link to="/truck">All Trucks</Link></div>
                            <div><Link to="/load">All Loads</Link></div>
                            <div><Link to="/dispatch">All Dispatch</Link></div>
                        </div>
                    </div>

                    <Switch>
                      <Route exact path="/" component={Homepage}/>

                      <Route exact path="/truck" component={TruckList}/>

                      <Route path="/truck/:id" component={Truck}/>

                      <Route exact path="/load" component={LoadList}/>

                      <Route path="/load/:id" component={Load}/>

                      <Route exact path="/dispatch" component={DispatchList}/>

                      <Route path="/dispatch/:id" component={Dispatch}/>

                      <Route path="/adminform" component={AdminForm}/>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
