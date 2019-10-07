import React, { Component } from 'react'
import Addtodo from "./componets/AddTodo";
import TodoList from "./componets/TodoList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompleteTodo from "./componets/Completed";
import OnGoing from "./componets/OnGoing";
import "./App.css"

export default class App extends Component {
  id = 0;
  state = {
    todos: [],
  }

  handleAddTodos = (value) => {
    let todoArr = [{ id: this.id, todo: value, check: false }]
    this.setState({
      todos: this.state.todos.concat(todoArr)
    })
    this.id++;
  }
  hanldeClickTodo = (e) => {
    //{ id: data.id, todo: data.todo, check: !data.check }
    const { todos } = this.state;
    console.log("e", Number(e.target.id))
    this.setState({
      todos: todos.map(data => data.id === Number(e.target.id)
        ? { id: data.id, todo: data.todo, check: !data.check }
        : data)
    })
    // console.log("data", this.state)
  }
  goBack() {
    console.log(this.props.history);
  }
  handleDelete = (e) => {
    const { todos } = this.state;
    var arr = [];
    todos.map(info => {
      if (info.id !== Number(e.target.id)) { arr.push(info) } else { console.log("true info", info) }
    });
    console.log("arr", arr);
    this.setState({
      todos: arr
    })
    console.log("나머지것들,", this.state)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nexState", nextState);
    return true;
  }
  render() {
    return (
      <div>
        <p className="Main">오늘의 할 일을 적어보시오!</p>
        <Addtodo handleAddTodos={this.handleAddTodos} />
        <Router>
          <div className="side">
            <Route exact path="/completed" render={() => <CompleteTodo completed={this.state.todos} />} />
            <Route exact path="/ongoing" render={() => <OnGoing _ing={this.state.todos} />} />
          </div>
          <div id="route">
            <Link to="/completed">완료한 것들</Link><br />
            <Link to="/ongoing">해야할 것들</Link>
          </div>
        </Router>
        <div >
          <TodoList todoList={this.state.todos} handleDelete={this.handleDelete} hanldeClickTodo={this.hanldeClickTodo} />
        </div>
      </div>
    )
  }
}
