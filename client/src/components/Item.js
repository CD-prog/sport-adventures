import React, { useState } from 'react'
import '../containers/Profile.css'

const startingState = {
  category: "",
  title: "",
  description: "",
  location: "",
  price: "",
  photoURL: "",
  phone: "",
  email: ""
}

function Item({ user, onSubmit }) {
  const [item, setItem] = useState(startingState)

  const handleSetItem = (e) => {
    e.preventDefault();
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveItem = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem(startingState);
  };

  return (
    <div className="card bg-light w-75 itemCard">
      <div className="card-header text-center text-light bg-dark">
        <h4>List your item</h4>
      </div>
      <form className="inputItem w-50">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Category</label>
          <select onChange={handleSetItem} className="form-control " name="category" type="text">
            <option>Select category</option>
            <option>Skis</option>
            <option>Snowboards</option>
            <option>Bicycles</option>
            <option>Roller blades</option>
            <option>Golf clubs</option>
            <option>Surfboards</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title </label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handleSetItem}
          />
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={handleSetItem}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              onChange={handleSetItem}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={handleSetItem}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Photo</label>
            <input
              type="text"
              className="form-control"
              name="photoURL"
              onChange={handleSetItem}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={handleSetItem}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={user.email}
              readOnly
              onFocus={handleSetItem}
            />
          </div>
          <button onClick={handleSaveItem} type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      <br />
    </div>
  )
}
export default Item