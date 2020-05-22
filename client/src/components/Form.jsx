import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const Form = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});
  const [likes, setLikes] = useState(0);


  //------------ create ------------------------
  const addPet = (e) => {
    e.preventDefault();
    let temp = [];
    let Pet = { name, type, description, skill1, skill2, skill3, likes }
    axios.post("http://localhost:8000/api/belt/", Pet)
      .then(res => {
        console.log(res.data.errors);
        if (res.data.errors) {
          setErrors(res.data.errors);
        }
        else {
          console.log("no error")
          navigate("/")
        }
      })
      .catch(err => console.log(err));
  }
  //---------------------------------------------
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-3">Submit a pet to the shelter</h1>
        <p class="lead">We have a 100% adoption rate</p>
        <hr class="my-2"></hr>
      </div>
    <div className="d-flex justify-content-center">
        <form onSubmit={ (e) => addPet(e) } className="form-group col-3">
          <input className="m-2 form-control" placeholder="Name:" type="text"  onChange = {(e)=>setName(e.target.value)}/>
          {errors.name ?
            <p className="text-danger">{errors.name.message}</p>
            : ""}
          <input className="m-2 form-control" placeholder="Type:" type="text" onChange={(e) => setType(e.target.value)} />
          {errors.type ?
            <p className="text-danger">{errors.type.message}</p>
            : ""}
          <input className="m-2 form-control" placeholder="Description:" type="text" onChange={(e) => setDescription(e.target.value)} />
          {errors.description ?
            <p className="text-danger">{errors.description.message}</p>
            : ""}
          <br></br>
          <div className="form-group">
            <input className="m-2 form-control" placeholder="Skill 1:" type="text" onChange={(e) => setSkill1(e.target.value)} />
            <input className="m-2 form-control" placeholder="Skill 2:" type="text" onChange={(e) => setSkill2(e.target.value)} />
            <input className="m-2 form-control" placeholder="Skill 3:" type="text" onChange={(e) => setSkill3(e.target.value)} />
          </div>
         
          <input className="m-2 btn btn-outline-dark" type="submit"/>
        </form>
      </div>
    </>
  );
}

export default Form;