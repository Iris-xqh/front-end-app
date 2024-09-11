import './App.css';
import React, { useState, useEffect } from 'react';
import { items, getAll, get, deleteById, post, put } from './memdb.js';

function App() {
  const [customers, setCustomers] = useState([]);

  const [selected, setSelected] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [inputValue, setInputValue] = useState({ id: '', email: '', password: '' });

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
      setInputValue({ id: '', name: '', email: '', password: '' });
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
    setInputValue({ id: '', name: '', email: '', password: '' });
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
        Updates
      </div>
      <div>
        <div className="row mb-3">
          <div className="col-2">
            Name:
          </div>
          <div className="col-6">
            <input className="form-control w-100" value={inputValue.name} id="nameInput"></ input>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">
            Email:
          </div>
          <div className="col-6">
            <input className="form-control w-100" value={inputValue.email} id="emailInput"></ input>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-2">
            Password:
          </div>
          <div className="col-6">
            <input className="form-control w-100" value={inputValue.password} id="passwordInput"></ input>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row'>
        <button type="button" className="btn btn-outline-danger px-3 me-2">Delete</button>
        <button type="button" className="btn btn-outline-primary px-3 me-2">Save</button>
        <button type="button" onClick={() => handleCancel()} className="btn btn-outline-secondary px-3 me-2">Cancel</button>

      </div>
    </div>

  );
}

export default App;
