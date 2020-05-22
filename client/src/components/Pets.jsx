import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from "@reach/router";



const Pets = (props) => {

  
  const [pets, setPets] = useState([])

  const navEdit = (e, id) => {
    e.preventDefault();
    navigate(`edit/${id}`);
  }
  
  const getPets = () => {
    axios.get("http://localhost:8000/api/belt") 
      .then(res => {
        console.log(res.data.all);
        setPets(res.data.all);
      })
      .catch(err => console.log(err));
  }
useEffect(() => {
    getPets();
  }, [props]);

  return (
    <>
      <div class="jumbotron">
        <h1 class="display-3">View all of our pets</h1>
        <p class="lead">Our pets have special skills. </p>
        <hr class="my-2"></hr>
        
      </div>
        
        <div className="d-flex flex-row justify-content-center">
        <table className="table table-striped table-responsive col-4">
          <thead className="thead-inverse">
            <tr>
              <th>pet</th>
              <th>type</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {pets.map(pet => 
              <tr key = {pet._id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                  <td>
                    <Link to={pet._id} > display </Link>
                      {" | "}
                  <a onClick={(e) => navEdit(e, pet._id)}href="#">edit</a>
                    {/* <a href="#" onClick={(e) => editPet(e, pet._id)}>display</a> */}
                  </td>
              </tr>
              )}
            </tbody>
            </table>
      </div>
      </>
    );
}
export default Pets;