import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
      //console.log(this.props);
      let projectItems;
      if(this.props.projects) {
          projectItems = this.props.projects.map(project => {
              return <ProjectItem key={project.id} project={project} onDelete={this.deleteProject.bind(this)} />
          })
      }
    return (
      <div className="Projects">
        <h3>My Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
