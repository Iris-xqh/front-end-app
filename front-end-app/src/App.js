import './App.css';
import React, { useState, useEffect } from 'react';
import { getAll, deleteById, post, put } from './memdb.js';
import CustomerList from './Components/CustomerList.js';
import CustomerAddUpdateForm from './Components/CustomerAddUpdateForm.js';

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
      <CustomerList
        customers={customers}
        selectedRow={selectedRow}
        handleRowClick={handleRowClick}></CustomerList>

      <CustomerAddUpdateForm
        mode={mode} 
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleCancel={handleCancel}
        handleSave={handleSave}
        handleDelete={handleDelete}>
      </CustomerAddUpdateForm>
    </div>

  );
}

export default App;
