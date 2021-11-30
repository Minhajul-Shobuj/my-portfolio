import React from 'react';
import { NavLink } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';

const AllProjects = (props) => {
    const [projects]=useProjects();
    console.log(projects)
    return (
        <div className="row row-cols-md-1 row-cols-lg-3 row-cols-1">
            {projects.map(project=>
                <div className="col">
                <div className="card  mt-2">
                  <div className="card-body d-flex">
                  <img src={project.image1} alt="" width="300px" height="140px"></img>
                    <div>
                    <h5 className="card-title">{project.name}</h5>
                    <h6 className="card-title">{project.name1}</h6>
                    {/* <NavLink></NavLink> */}
                    <button className="btn btn-info">Details</button>
                    </div>
                  </div>
                </div>
              </div>
                )}
        </div>
    );
};

export default AllProjects;