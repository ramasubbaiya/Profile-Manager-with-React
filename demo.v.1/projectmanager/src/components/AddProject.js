import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  
  constructor() {
    super();
    this.state = {
        newProject: {}
    }
  }
  static defaultProps = {
    categories: ['Web Development', 'Web Design', 'Mobile Development']
  }

  handleSubmit(e) {
      if(this.refs.title.value === '') {
        alert('Title is required');
      } else {
        this.setState({newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function() {
            //console.log(this.state.newProject)
            this.props.addProject(this.state.newProject);
        })
      }
    // console.log(this.refs.title.value);
    // console.log(this.refs.category.value);
    // console.log('Submitted');
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="AddProject">
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Project Title</label><br />
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br /> 
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
