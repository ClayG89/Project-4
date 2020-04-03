import React, { Component } from 'react'

export default class TruckList extends Component {
    state = {
        trucklist: [],
    }
    getTruckList = () => {
        axios.get('/api/trucklists').then((response) => {
            const foundTruckList = response.data;
            this.state({
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
    submitCreateTruckList = (event) => {
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
                <h1>Providence Transport</h1>
                <h2>Trucks</h2>
                <div>
                <Link to="/trucklist">Trucks</Link>
                {
                    this.state.trucklist.map((trucklist, i) => {
                        return (
                        <TruckList trucklist={ trucklist } key={ i }
                        submitCreateTruckList={this.submitCreateTruckList}
                        changeInputTruckList={this.changeInputTruckList}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

