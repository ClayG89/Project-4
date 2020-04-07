import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TruckList from "./TruckList";
import Truck from "./Truck";
import LoadList from "./LoadList";
import Load from "./Load";
import DispatchList from "./DispatchList";
import Dispatch from "./Dispatch";
import Homepage from "./Home";
import AdminForm from "./AdminForm"





export default class Home extends Component {
    state = {
        dispatch: [],
        truck: [],
        load: [],
    }

    addToDispatch = () => {
        this.props.addToDispatch(this.props.trk);
    }

    render() {
        return (
            <div>
                <div className="containerone">

                    <div className="locater">
                        <input type="text" />
                        <button>submit</button>
                    </div>
                </div>
                <div className="containertwo">

                    <div id="aboutus">
                        <h1>About Us</h1>
                        <p>Providence lets you manage routes for trucks, buses, delivery vehicles, and more. Instead of manually calling drivers to see where they are, Samsara lets you instantly track vehicle location, route progress, and late or missed stops.</p>
                        <p>Let customers and outside stakeholders track route progress and receive alerts automatically. Authorized users can anticipate arrivals or delays, which improves customer service, reduces calls, and can become a differentiator for your business.</p>
                        <p>Adapt on the go by remotely re-routing vehicles and sending messages to drivers through the Providence Driver app.</p>
                    </div>
                </div>
                    <div id="main">

                    </div>

                <footer>
                    <p>established 2020</p>
                </footer>


            </div>

        )
    }
}


