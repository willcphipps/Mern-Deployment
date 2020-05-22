import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Pet = (props) => {

  const [pet, setPet] = useState({})


// -------------- retrieve item from db -------------------
  useEffect(() => {
    axios.get(`http://localhost:8000/api/belt/${props.id}`)
      .then(res => {
          setPet(res.data)
      })
      .catch(err => {
        console.log(err)
    });
  }, [props]);//--------------------------------------------


//------------- delete item from db ------------------------
  const adoptPet = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/belt/${id}`)
        .then(res => {
          console.log(res);
          navigate("/")
        })
        .catch(err => console.log(err));
  } //-------------------------------------------------------


  return (
    <>
      <div class="jumbotron">
        <h1 class="display-3">Your Pets Details</h1>
        <p class="lead">Every pet is a special pet</p>
        <hr class="my-2"></hr>
      </div>
        <div>
            <button
                onClick={(e) =>  adoptPet(e, pet._id) }
          className="m-4 btn btn-outline-danger">Adopt this pet!</button>
        </div>
      <div className="d-flex justify-content-center flex-row border border-dark text-center m-4 py-3">
        <div className="text-left m-4 flex-column">
            <p><b>Pet Name:</b></p>
            <p><b>Pet Type:</b></p>
            <p><b>Pet Description:</b></p>
            <p><b>Pet Skills</b></p>
        </div>
        <div className="text-left m-4 flex-column">
            <p >{pet.name}</p>
            <p>{pet.type}</p>
            <p>{pet.description}</p>
            <p> 
            {pet.skill1} {" "} 
            {pet.skill2} {" "}
            {pet.skill3}
            </p>
          </div>
        </div>
      </>

    );
}
export default Pet;