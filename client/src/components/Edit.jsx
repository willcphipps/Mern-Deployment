import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Edit = (props) => {

  const [pet, setPet] = useState({})
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [skill1, setSkill1] = useState("")
  const [skill2, setSkill2] = useState("")
  const [skill3, setSkill3] = useState("")
  const [errors, setErrors] = useState({});


  // -------------- retrieve item from db -------------------
  useEffect(() => {
    axios.get(`http://localhost:8000/api/belt/${props.id}`)
      
      .then(res => {
        console.log(res.data)
        setPet(res.data)
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        // console.log(typeof(res.data.description))
        setSkill1(res.data.skill1)
        setSkill2(res.data.skill2)
        setSkill3(res.data.skill3)
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);//--------------------------------------------------



  

  //--------------- updating item in db --------------------
  const updatePet = (e, id) => {
    console.log(id)
    e.preventDefault();
    let Pet = { name, type, description, skill1, skill2, skill3 };
    axios.put(`http://localhost:8000/api/belt/${id}`, Pet)
      .then(res => {
        console.log(res);
        if (res.data.errors) {
          setErrors(res.data.errors);
        }
        else {
          navigate(`/${id}`)
        }
      })
      .catch(err => console.log(err));
  }//--------------------------------------------------------


  return (
    <>
      <div class="jumbotron">
        <h1 class="display-3">Edit Your pet!</h1>
        <p class="lead">Notice something different about your pet? Update below.</p>
        <hr class="my-2"></hr>
      </div>
      <div>
        <form onSubmit={ (e) => updatePet(e, pet._id) } className="form-group col-3">
          <input className="m-2 form-control" value={ name } type="text"  onChange = {(e)=>setName(e.target.value)}/>
          {errors.name ?
            <p className="text-danger">{errors.name.message}</p>
            : ""}
          <input className="m-2 form-control" value={ type } type="text" onChange={(e) => setType(e.target.value)} />
          {errors.type ?
            <p className="text-danger">{errors.type.message}</p>
            : ""}
          <input className="m-2 form-control" value={ description } type="text" onChange={(e) => setDescription(e.target.value)} />
          {errors.description ?
            <p className="text-danger">{errors.description.message}</p>
            : ""}
          <br></br>
          <div className="form-group">
            <input className="m-2 form-control" value={ skill1 } type="text" onChange={(e) => setSkill1(e.target.value)} />
            <input className="m-2 form-control" value={ skill2 } type="text" onChange={(e) => setSkill2(e.target.value)} />
            <input className="m-2 form-control" value={ skill3 } type="text" onChange={(e) => setSkill3(e.target.value)} />
          </div>
          <input className="m-2 btn btn-outline-dark" type="submit"/>
        </form>
      </div>


    </>
  );
}
export default Edit;