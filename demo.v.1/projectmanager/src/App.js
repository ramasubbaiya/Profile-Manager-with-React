import React, { Component } from 'react';
import uuid from 'uuid';
import Todos from './components/Todos';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    projects: [],
    todos: [],
    error: null,
    isLoaded: false,
  }
}

fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            todos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
}

getTodos() {
  this.setState({ todos: this.fetchTodos()});
}

getProjects() {
  this.setState({ projects: [
    {
      id: uuid.v4(),
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
    }
  ]});
}

componentWillMount() {
  this.getProjects();
  this.getTodos();
}

componentDidMount() {
  this.getTodos();
}

handleAddProject(project) {
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects});
}

handleDeleteProject(id) {
  let projects = this.state.projects;

  let index = projects.findIndex(project => project.id === id);
  projects.splice(index, 1);

  this.setState({projects: projects});
}

  render() {

    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
