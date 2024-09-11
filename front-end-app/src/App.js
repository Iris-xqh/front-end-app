import './App.css';
import React, { useState, useEffect } from 'react';
import { getAll, deleteById, post, put } from './memdb.js';

function App() {
  const [customers, setCustomers] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  let mode = selected ? "Update" : "Add";

  const getCustomers = function () {
    setCustomers(getAll());
  }

  useEffect(() => {
    getCustomers();
  }, [])

  const handleRowClick = (row) => {
    if (selectedRow && selected && selectedRow === row.id) {
      setSelected(false);
      setSelectedRow(null);
      setInputValue(null);
    }
    else {
      setSelectedRow(row.id);
      setSelected(true);
      setInputValue(row);
    }
  };

  const handleCancel = () => {
    setSelected(false);
    setSelectedRow(null);
    setInputValue(null);
  }

  const handleDelete = () => {
    if (!selected) return;
    handleCancel();
    deleteById(selectedRow);
    setCustomers(getAll());
  }

  const handleSave = () => {
    if (mode === "Add") {
      post(inputValue);
      setCustomers(getAll());
      handleCancel();
    }
    else if (mode === "Update") {
      put(inputValue.id, inputValue);
      setCustomers(getAll());
      handleCancel();
    }
  }

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let newInputValue = { ...inputValue };
    newInputValue[name] = value;
    setInputValue(newInputValue);
  }


  return (

    <div className='container d-flex flex-column justify-content-center w-50'>
      <div className='fs-4 fw-bold mb-4'>
        Customer List
      </div>

      <div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(row => (
              <tr key={row.id}
                onClick={() => handleRowClick(row)}
                style={{ fontWeight: row.id === selectedRow ? 'bold' : 'normal' }}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='fs-4 fw-bold mb-4'>
        {mode}
      </div>
      <div>
        <div className="row mb-3">
          <div className="col-2">
            Name:
          </div>
          <div className="col-6">
            <input className="form-control w-100"
              type="text"
              name='name'
              onChange={(e) => handleInputChange(e)}
              value={inputValue ? inputValue.name : ''}
              placeholder='Customer Name'
              id="nameInput"></ input>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">
            Email:
          </div>
          <div className="col-6">
            <input className="form-control w-100"
              type="text"
              name='email'
              onChange={(e) => handleInputChange(e)}
              value={inputValue ? inputValue.email : ''}
              placeholder='Customer email'
              id="emailInput"></ input>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">
            Password:
          </div>
          <div className="col-6">
            <input className="form-control w-100"
              type="text"
              name='password'
              onChange={(e) => handleInputChange(e)}
              value={inputValue ? inputValue.password : ''}
              placeholder='Customer password'
              id="passwordInput"></ input>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row'>
        <button type="button" onClick={() => handleDelete()} className="btn btn-outline-danger px-3 me-2">Delete</button>
        <button type="button" onClick={() => handleSave()} className="btn btn-outline-primary px-3 me-2">Save</button>
        <button type="button" onClick={() => handleCancel()} className="btn btn-outline-secondary px-3 me-2">Cancel</button>

      </div>
    </div>

  );
}

export default App;
