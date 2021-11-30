import React from 'react';
import image1 from '../../images/62Z_2107.w020.n001.1244B.p15.1244.jpg'
import image2 from '../../images/19238.jpg'
import image3 from '../../images/19362653.jpg'
import image4 from '../../images/20943839.jpg'
import image5 from '../../images/Wavy_Edu-02_Single-05.jpg'
import image6 from '../../images/Wavy_Tech-09_Single-08.jpg'


const Projects = (props) => {
    return (
        <div className="container">
            <h1>MY Projects</h1>
            <div className="d-flex align-items-center">
            <div className="row row-cols-md-1 row-cols-lg-3 row-cols-1">
  <div className="col">
    <div className="card  mt-2">
      <div className="card-body d-flex">
      <img src={image1} alt="" width="300px" height="140px"></img>
        <div>
        <h5 className="card-title">Project with React and MongoDB</h5>
        <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mt-2">
      <div className="card-body d-flex">
        <img src={image2} alt="" width="300px" height="140px"></img>
        <div>
        <h5 className="card-title">Project with React and MongoDB</h5>
        <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card  mt-2">
      <div className="card-body d-flex">
      <img src={image3} alt="" width="300px" height="140px"></img>
        <div>
        <h5 className="card-title">Project with JavaScript</h5>
        <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card  mt-2">
      <div className="card-body d-flex">
      <img src={image4} alt="" width="300px" height="140px"></img>
        <div>
        <h5 className="card-title">Project with JavaScript</h5>
        <button className="btn btn-info">Details</button>
        </div>
      </div>
  </div>
</div>
  <div className="col">
    <div className="card  mt-2">
      <div className="card-body d-flex">
      <img src={image5} alt="" width="300px" height="140px"></img>
        <div>
        <h5 className="card-title">Project with HTML and Boostarp</h5>
        <button className="btn btn-info">Details</button>
        </div>
      </div>
  </div>
</div>
  <div className="col">
    <div className="card  mt-2">
      <div className="card-body d-flex">
      <img src={image6} alt="" width="300px" height="140px"></img>
        <div>
        <h5 className="card-title">Project with HTML and CSS</h5>
        <button className="btn btn-info">Details</button>
        </div>
      </div>
  </div>
</div>
</div>
            </div>
        </div>
    );
};

export default Projects;