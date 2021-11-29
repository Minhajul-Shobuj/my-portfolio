import React from 'react';
import { useForm } from "react-hook-form";

const ContactMe = (props) => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <hr />
           <div className="d-flex align-items-center justify-content-around row row-cols-md-1 row-cols-lg-2 row-cols-1">
           <div className="col">
               <h1>Contact Info</h1>
               <ul className="mt-4">
    <li className="list-group-item">Email: mdminhajulislamshobuj@gmail.com</li>
    <li className="list-group-item">Phone: +8801750751550</li>
    <li className="list-group-item">Rangpur 5402, Bangladesh</li>
  </ul> 
           </div>
           <div className="col">
           <form onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2 rounded" placeholder="Name" style={{width:"350px"}} {...register("name", { required: true, maxLength: 20 })} /><br/>
      <input className="mb-2 rounded" placeholder="Email" style={{width:"350px"}} {...register("email", { required: true})} /><br/>
      <input className="mb-2 rounded" placeholder="Project Name" style={{width:"350px"}} {...register("projectName", { required: true})} /><br/>
      <input className="mb-2 rounded" placeholder="Messege" style={{height:"100px",width:"350px"}} {...register("messege", { required: true })} /><br/>
      <input type="submit" />
    </form>
           </div>
           </div>
        </div>
    );
};

export default ContactMe;