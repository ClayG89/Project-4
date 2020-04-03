import React, { Component } from 'react'

export default class LoadList extends Component {
    state = {
        loadlist: [],
    }
    getLoadList= () => {
        axios.get('/api/loadlists').then((response) => {
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
                <h1>Providence Transport</h1>
                <h2>Loads</h2>
                <div>
                <Link to="/loadlist">Loads</Link>
                {
                    this.state.loadlist.map((loadlist, i) => {
                        return (
                        <Loadlist loadlist={ loadlist } key={ i }
                        submitCreateLoadList={this.submitCreateLoadList}
                        changeInputLoadList={this.changeInputLoadList}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}