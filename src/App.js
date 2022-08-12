import React, { Component } from 'react'
import TodoList from './components/TodoList'
import "./App.css"
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
handlecomplete = (x) => this.setState({tab:this.state.tab.map(el=>el.id===x?{...el,isDone:!el.isDone}:el)})
  render() {
    return (
      <div><TodoList tasks={this.state.tab} del={this.handledelete} com={this.handlecomplete} /></div>
    )
  }
}
