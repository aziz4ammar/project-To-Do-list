import React, { Component } from 'react'

export default class TodoTask extends Component {
    state={
        newtask:""
    };
    handlechange = (e) => this.setState({newtask:e.target.value});
    handlesubmit = (e) =>{e.preventDefault();this.state.newtask===""?alert("insert task"):
    this.props.add(this.state.newtask);this.setState({newtask:""})};
    render() {
    return (
    <div>
        <form action=""onSubmit={this.handlesubmit}>
            <input type="text" value={this.state.newtask} onChange={this.handlechange} />
            <button type='submit'>+</button>
        </form>
    </div>
    )
    }
}
