import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Load from './Load'

export default class LoadList extends Component {
    state = {
        loadlist: [],
    }
    getLoadList= () => {
        axios.get('/api/v1/loads').then((response) => {
            const foundLoadList = response.data;
            this.state({
        load: foundLoadList
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    changeInputLoadList = (event) => {
        const updatedNewLoadList = { ...this.state.newLoadList};
        updatedNewLoadList[event.target.name] = event.target.value;
        this.setState({
            newLoadList: updatedNewLoadList,
        });
    }
    submitCreateLoadList = (event) => {
        event.preventDefault();
        axios.post('/api/loadlist', this.state.newLoadList).then(() => {
            this.toggleCreateForm();
            this.getLoadList();
        });
    }
    componentDidMount() {
        this.getLoadList()
    }
    render() {
        return (
            <div>
                
                <h2>Loads</h2>

                <div>
                    <h4>Load Number</h4>
                    <input type="number" name="loadnum" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Pick up Number</h4>
                    <input type="number" name="pickupnum" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Delivery Number</h4>
                    <input type="number" name="deliverynum" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Pick up Time</h4>
                    <input type="number" name="pickuptime" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Delivery Time</h4>
                    <input type="number" name="deliverytime" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Rate</h4>
                    <input type="number" name="rate" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Miles</h4>
                    <input type="number" name="miles" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Pick up Location</h4>
                    <input type="text" name="pickuploc" onChange={ this.updateLoad }/>
                </div>
                <div>
                <h4>Delivery Location</h4>
                    <input type="text" name="deliveryloc" onChange={ this.updateLoad }/>
                </div>

                <button onClick={ this.submitCreateTruck }>Submit</button>
                       
                
                <div>
                
                {
                    this.state.loadlist.map((load, i) => {
                        return (

                            <div>
                                <Link to={`/load/${load.id}`}>{load.loadnum}</Link>
                            </div>
                        // <LoadList loadlist={ loadlist } key={ i }
                        // submitCreateLoadList={this.submitCreateLoadList}
                        // changeInputLoadList={this.changeInputLoadList}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}