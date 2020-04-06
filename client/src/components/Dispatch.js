import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import Truck from './Truck'
import Load from './Load'

export default class DispatchList extends Component {
    state = {
        trucklist: [],
        loadlist: [],
    }
    componentDidMount() {
        const truckId = this.props.match.params.id;
        this.fetchTruck(truckId)
    }

    fetchTruck = async (truckId) => {
        try {
            const truckResponse = await axios.get(`/api/v1/trucks/${truckId}/`)
            this.setState({
                truck: truckResponse.data,
                load: truckResponse.data.loads,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }
    componentDidMount() {
        const loadId = this.props.match.params.id;
        this.fetchLoad(loadId)
    }

    fetchLoad = async (loadId) => {
        try {
            const loadResponse = await axios.get(`/api/v1/loads/${loadId}/`)
            this.setState({
                load: loadResponse.data,
                truck: loadResponse.data.trucks,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }
    render() {
        return (
            <div>
                <h2>Dispatch Detail</h2>

                <h3>Truck Info</h3>
                <div>
                    <h3>Driver Name:  {this.state.truck.name}</h3>
                    <h3>Trailer Type:  {this.state.truck.trailertype}</h3>
                    <h3>Trailer Number:  {this.state.truck.trailernum}</h3>
                    <h3>Available hours: {this.state.truck.hours}</h3>
                    <h3>Phone:  {this.state.truck.Phone}</h3>
                    <h3>Truck Number: {this.state.truck.trucknum}</h3>
                    <h3>Driver Number:  {this.state.truck.drivernum}</h3>
                    <h3>email: {this.state.truck.email}</h3>
                </div>
                <h3>Load Info</h3>
                <div>
                    <h3>Load Number:  {this.state.load.loadnum}</h3>
                    <h3>Pick up Number:  {this.state.load.pickupnum}</h3>
                    <h3>Delivery Number:  {this.state.load.deliverynum}</h3>
                    <h3>Pick up Time: {this.state.load.pickuptime}</h3>
                    <h3>Delivery Time:  {this.state.load.deliverytime}</h3>
                    <h3>Rate: {this.state.load.rate}</h3>
                    <h3>Miles:  {this.state.load.miles}</h3>
                    <h3>Pick up Location: {this.state.load.pickuploc}</h3>
                    <h3>Delivery Location: {this.state.load.deliveryloc}</h3>
                    <h3>DH/pick:  {this.state.load.droppick}</h3>
                    <h3>DH/delivery:  {this.state.load.dropdel}</h3>
                </div>
            </div>
        )
    }
}

