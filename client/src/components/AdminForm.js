import React, { Component } from 'react'
import TruckList from './TruckList'

export default class AdminForm extends Component {
    state = {
        truck: {
            name: '',
            trailertype: '',
            trailernum: 0,
            hours: 0,
            Phone: '',
            trucknum: 0,
            drivernum: 0,
            email: '',
        },

    }

    updateTruck = (event) => {
        // Make a copy of our current product.
        const newTruck = { ...this.state.currentTruck };
        // Modify the copy of the product
        newTruck[event.target.name] = event.target.value;
        // Update the state with our modified product info.
        this.setState({
            currentTruck: newTruck,
        });
    }

    submitNewTruck = () => {
        this.props.addNewTruck(this.state.currentTruck);
    }
    
    render() {
        return (
            <div>
                <div>
                    <input type="text" name="name" onChange={ this.updateTruck }/>
                </div>
                <div>
                    <input type="text" name="trailertype" onChange={ this.updateTruck }/>
                </div>
                <div>
                    <input type="number" name="trailernum" onChange={ this.updateTruck }/>
                </div>
                <div>
                    <input type="number" name="hours" onChange={ this.updateTruck }/>                    
                </div>
                <div>
                    <input type="number" name="Phone" onChange={ this.updateTruck }/>                  
                </div>
                <div>
                    <input type="number" name="trucknum" onChange={ this.updateTruck }/>                  
                </div>
                <div>
                    <input type="text" name="email" onChange={ this.updateTruck }/>                    
                </div>

                <button onClick={ this.submitNewTruck }>Submit</button>
                
                {/* <button onClick={ this.submitNewProduct }>Submit</button> */}
            </div>
        )
    }
}
