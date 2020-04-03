import React, { Component } from 'react'
import axios from 'axios'
import Truck from './Truck'
import Load from './Load'

export default class Homepage extends Component {
    state = {
        load: [],
        dispatch: []
    }

    getLoad= () => {
        axios.get('/api/loads').then((response) => {
            const foundLoad = response.data;
            this.state({
        load: foundLoad
            })
        })
    }
    getDispatch= () => {
        axios.get('/api/dispatchs').then((response) => {
            const foundDispatch = response.data;
            this.state({
        dispatch: foundDispatch
            })
        })
    }
    toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    }
    changeInputLoad = (event) => {
        const updatedNewLoad = { ...this.state.newLoad};
        updatedNewLoad[event.target.name] = event.target.value;
        this.setState({
            newLoad: updatedNewLoad,
        });
    }
    changeInputDispatch= (event) => {
        const updatedNewDispatch = { ...this.state.newDispatch};
        updatedNewDispatch[event.target.name] = event.target.value;
        this.setState({
            newDispatch: updatedNewDispatch,
        });
    }
    submitCreateLoad = (event) => {
        event.preventDefault();
        axios.post('/api/load', this.state.newLoad).then(() => {
            this.toggleCreateForm();
            this.getLoad();
        });
    }
    submitCreateDispatch = (event) => {
        event.preventDefault();
        axios.post('/api/dispatch', this.state.newDispatch).then(() => {
            this.toggleCreateForm();
            this.getDispatch();
        });
    }
    componentDidMount() {
        
        this.getLoad()
        this.getDispatch()
    }

    render() {
        return (
         
                <div>
                <Link to="/Load">Loads</Link>
                {
                    this.state.Loads.map((load, i) => {
                        return (
                        <Load load={ load } key={ i }
                        submitCreateLoad={this.submitCreateLoad}
                        changeInputLoad={this.changeInputLoad}/>
                        )
                    })
                }
                </div>
                <div>
                <Link to="/Dispatch">Dispatch</Link>
                {
                    this.state.dispatch.map((dispatch, i) => {
                        return (
                        <Dispatch dispatch={ dispatch } key={ i }
                        submitCreateDispatch={this.submitCreateDispatch}
                        changeInputDispatch={this.changeInputDispatch}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

