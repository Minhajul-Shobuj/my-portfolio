import React from 'react';

const MyEducation = (props) => {
    return (
        <div id="education">
            <h1>My Education</h1>
            <div className="d-flex align-items-center justify-content-around container my-3">
            <div className="row row-cols-md-2 row-cols-lg-2 row-cols-2">
            <div className="col">
  <div style={{width:"190px",height:"140px"}} className="card  ms-5 mt-2">
      <div className="card-body">
      <p>2021</p>
        <p className="card-title">Web Developoment Course</p>
      </div>
    </div>
</div>
  <div className="col">
    <div style={{width:"190px",height:"140px"}} className="card  ms-5 mt-2">
      <div className="card-body">
      <p>2017</p>
        <p className="card-title">Secondary School Certificate (SSC)</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div style={{width:"190px",height:"140px"}} className="card  ms-5 mt-2">
      <div className="card-body">
        <p>2019</p>
        <p className="card-title">Higher Secondary School Certificate(HSC)</p>
      </div>
    </div>
</div>
  <div className="col">
  <div style={{width:"190px",height:"140px"}} className="card  ms-5 mt-2">
      <div className="card-body">
      <p>Current</p>
        <p className="card-title">Bachelor of Science in Chemistry(BSC)</p>
      </div>
    </div>
</div>
</div>
            </div>
        </div>
    );
};

export default MyEducation;