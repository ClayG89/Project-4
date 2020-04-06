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
                
                <h1>Providence Transport</h1>
                
                <div>                  
                    
                </div>                   
            </div>
                
           
        )
    }
}


