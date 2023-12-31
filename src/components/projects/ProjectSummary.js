import React from "react";

function ProjectSummary({ project }) {
  return (
    <>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
          <p className="grey-text">2nd march,3pm</p>
        </div>
      </div>
    </>
  );
}

export default ProjectSummary;
