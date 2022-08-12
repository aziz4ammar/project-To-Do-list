import React, { Component } from 'react'
import TodoList from './components/TodoList'

export default class App extends Component {
  state={tab:[
    {
        id:Math.random() , act:"Oppo" , isDone:false
    },
    {
        id:Math.random() , act:"Samsung" , isDone:false
    },
    {
        id:Math.random() , act:"Apple" , isDone:false
    },
  ]
}
handledelete = (x) => this.setState({tab:this.state.tab.filter(el=>el.id!=x)});
  render() {
    return (
      <div><TodoList tasks={this.state.tab} del={this.handledelete} /></div>
    )
  }
}
