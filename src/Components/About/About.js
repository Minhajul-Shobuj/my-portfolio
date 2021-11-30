import React from 'react';

const About = (props) => {
    return (
       <div id="about" className="container">
           <h1>About Me</h1>
           <div className="row row-cols-md-1 row-cols-lg-2 row-cols-1">
           <div className="col">
  <ul className="mt-4">
    <li className="list-group-item">Name: Md Minhajul Islam</li>
    <li className="list-group-item">Age: 21</li>
    <li className="list-group-item">Qualification: HSC</li>
    <li className="list-group-item">Post: Junior Web Developer</li>
    <li className="list-group-item">Language: Bangla</li>
  </ul>
   <a type="button" className="btn btn-warning w-25 mx-auto mt-2" href="www.google.com">Resume</a>
</div>
<div className="col row row-cols-md-2 row-cols-lg-2 row-cols-2">
  <div  className="col">
    <div style={{width:"165px",height:"100px"}} className="card ms-5 mt-2">
      <div className="card-body">
        <h5 className="card-title">1+<br/> Years of Exprience</h5>
      </div>
    </div>
  </div>
  <div  className="col">
    <div style={{width:"165px" ,height:"100px"}} className="card  ms-5 mt-2">
      <div className="card-body">
        <h5 className="card-title">20+<br/> Projects</h5>
      </div>
    </div>
  </div>
  <div  className="col">
    <div style={{width:"165px",height:"100px"}} className="card  ms-5 mt-2">
      <div className="card-body">
        <h5 className="card-title">2+<br/>Online Courses Taken</h5>
      </div>
    </div>
  </div>
  <div  className="col">
    <div style={{width:"165px",height:"100px"}} className="card  ms-5 mt-2">
      <div className="card-body">
        <h5 className="card-title">3+<br/> Awards Won</h5>
      </div>
  </div>
</div>
</div>
           </div>
        </div>
    );
};

export default About;