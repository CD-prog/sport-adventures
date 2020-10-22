import React, { useState, useEffect } from 'react';
import User from '../components/User'
import '../containers/Profile.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Item from './Item';
import API from '../utils/API';

const Profile = ({ handleLogout, user }) => {
  const history=useHistory();
  const [results, setResults] = useState({selling: [], renting: []});
  useEffect(() => {
    const itemsForRent = () => {
      axios.get('/api/items/myitems/all', {
        params: { email: user.email}
      })
        .then(({ data }) => setResults(data))
        .catch((err) => { console.log(err) })
    }
    itemsForRent()
  }, [user])
  console.log('results', results)

  const saveNewItem = (item) =>{
    API.saveItem(item)
    .then(({data}) => {
      const newResults = {
        selling: [...results.selling, data],
        renting: [...results.renting]
      }
    
      setResults(newResults);
    })
    .catch(err => console.log(err));
  }
  return (
    <>
    
      <br />
      <h3 className="text-center">You are currently signed in as : {user.email}</h3>
      <button className="btn-danger float-right" onClick={handleLogout}>Logout</button>
      <br />
      <User />
      <br />
    <div>
      <div className="tracking-in-contract-bck gear text-center">YOUR GEAR DASHBOARD</div>
      <br />
      <div className="selling">
        <div className="li text-center slide-in-left w-50">LISTED ITEMS</div>
      {results.selling.length ? results.selling.map((result) => <div className="slide-in-bottom card float-left gearCard" key={result._id}>
        <div className="card-body ">
          <h5 className="card-header text-center">{result.title}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Category: {result.category}</li>
            <li className="list-group-item">Description: {result.description}</li>
            <li className="list-group-item">Location: {result.location}</li>
            <li className="list-group-item">Price: {result.price}</li>
            <li className="list-group-item">Phone number: {result.phone}</li>
            <li className="list-group-item">Email: {result.email}</li>
            <li className="list-group-item">RentedBy: {result.rentedBy}</li>
          </ul>

          {(result.rentedBy != null) ?
            <button
              onClick={(id) => {
                history.go(0);
                id = result._id;
                axios.put('/api/items/' + id, { rentedBy: null })
                  .then(({ data }) => data)
                  .catch((err) => { console.log(err) })
              }
              }
              className="card-link btn btn-outline-primary float-right">
              Make item available
         </button> : null
          }
        </div>
      </div>) : null}
      </div>
      </div>
      <br/>
      <div className="renting">
      <div className="li text-center slide-in-left w-50">RENTED ITEMS</div>
      {results.renting.length ? results.renting.map((result) => <div className="slide-in-bottom card float-left gearCard" key={result._id}>
        <div className="card-body ">
          <h5 className="card-header text-center">{result.title}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Category: {result.category}</li>
            <li className="list-group-item">Description: {result.description}</li>
            <li className="list-group-item">Location: {result.location}</li>
            <li className="list-group-item">Price: {result.price}</li>
            <li className="list-group-item">Phone number: {result.phone}</li>
            <li className="list-group-item">Email: {result.email}</li>
            <li className="list-group-item">RentedBy: {result.rentedBy}</li>
          </ul>
        </div>
      </div>) : null}</div>
      <br/>
      <Item user={user} onSubmit={saveNewItem}/>
      <br/>
    </>
  )
}
export default Profile
