import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class DispatchList extends Component {
        state = {
            dispatch: []
        }
        getDispatchList = () => {
            axios.get('/api/dispatchlists').then((response) => {
                const foundDispatchList = response.data;
                this.state({
            dispatch: foundDispatchList
                })
            })
        }
        toggleCreateForm = () => {
            const newShowCreateForm = !this.state.showCreateForm;
            this.setState({
                showCreateForm: newShowCreateForm,
            });
        }
    
        changeInputDispatchList = (event) => {
            const updatedNewDispatchList = { ...this.state.newDispatchList};
            updatedNewDispatchList[event.target.name] = event.target.value;
            this.setState({
                newDispatchList: updatedNewDispatchList,
            });
        }
    
        submitCreateDispatchList = (event) => {
            event.preventDefault();
            axios.post('/api/dispatchlist', this.state.newDispatchList).then(() => {
                this.toggleCreateForm();
                this.getDispatchList();
            });
        }
        componentDidMount() {
            this.getDispatchList()
        }
    
        render() {
            return (
             
                <div>
                    <div>
                    <Link to="/DispatchList">Dispatch</Link>
                    {
                        this.state.dispatchlist.map((dispatchlist, i) => {
                            return (
                            <DispatchList dispatchlist={ dispatchlist } key={ i }
                            submitCreateDispatchList={this.submitCreateDispatchList}
                            changeInputDispatchList={this.changeInputDispatchList}/>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }
    }
