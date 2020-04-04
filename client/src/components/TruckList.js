import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Truck from './Truck'
import AdminForm from './AdminForm'

export default class TruckList extends Component {
    state = {
        trucklist: [],
    }
    getTruckList = () => {
        axios.get('/api/v1/trucks/').then((response) => {
            const foundTruckList = response.data;
            this.setState({
        trucklist: foundTruckList
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    changeInputTruckList = (event) => {
        const updatedNewTruckList = { ...this.state.newTruckList};
        updatedNewTruckList[event.target.name] = event.target.value;
        this.setState({
            newTruckList: updatedNewTruckList,
        });
    }
    submitCreateTruck = (event) => {
        event.preventDefault();
        axios.post('/api/trucklist', this.state.newTruckList).then(() => {
            this.toggleCreateForm();
            this.getTruckList();
        });
    }
    componentDidMount() {
        this.getTruckList()
    }
    render() {
        return (
            <div>
                
                <h2>Trucks</h2>

                <div>
                    <h4>Driver Name</h4>
                    <input type="text" name="name" onChange={ this.updateTruck }/>
                </div>
                <div>
                <h4>Trailer Type</h4>
                    <input type="text" name="trailertype" onChange={ this.updateTruck }/>
                </div>
                <div>
                    <h4>Trailer Number</h4>
                    <input type="number" name="trailernum" onChange={ this.updateTruck }/>
                </div>
                <div>
                    <h4>Hours Available</h4>
                    <input type="number" name="hours" onChange={ this.updateTruck }/>                    
                </div>
                <div>
                    <h4>Phone</h4>
                    <input type="number" name="Phone" onChange={ this.updateTruck }/>                  
                </div>
                <div>
                    <h4>Truck Number</h4>
                    <input type="number" name="trucknum" onChange={ this.updateTruck }/>                  
                </div>
                <div>
                    <h4>Email</h4>
                    <input type="text" name="email" onChange={ this.updateTruck }/>                    
                </div>

                <button onClick={ this.submitCreateTruck }>Submit</button>
                       
                
                <div>
                   
                {
                    this.state.trucklist.map((truck, i) => {
                        return (

                            <div>
                                <Link to={`/truck/${truck.id}`}>{truck.name}</Link>
                            </div>
                        // <Truck truck={ truck } key={ i }
                        // submitCreateTruckList={this.submitCreateTruckList}
                        // changeInputTruckList={this.changeInputTruckList}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

