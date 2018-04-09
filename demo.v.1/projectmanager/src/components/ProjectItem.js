import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
      console.log(this.props);
    return (
        <li><strong>{this.props.project.title}</strong>: {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button> </li> 
    );
  }
}

ProjectItem.propTypes = {
    deleteProject: PropTypes.func,
    project: PropTypes.object
}

export default ProjectItem;
