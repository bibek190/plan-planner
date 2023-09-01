import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  let uid = useParams().id;
  console.log(uid);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {uid} </span>
          <p>
            Loremdfsdf sdf sdfsd sdf dsf sdf sdf dsf dsfsdf sdf sdf dsf dsfsd
            sdf
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Bibek Tech </div>
          <div>1st nov ,4am </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
