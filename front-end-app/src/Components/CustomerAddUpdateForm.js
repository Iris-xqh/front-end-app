const CustomerAddUpdateForm = (params) => {
  return (
    <div>
      <div className='fs-4 fw-bold mb-4'>
        {params.mode}
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
              onChange={(e) => params.handleInputChange(e)}
              value={params.inputValue ? params.inputValue.name : ''}
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
              onChange={(e) => params.handleInputChange(e)}
              value={params.inputValue ? params.inputValue.email : ''}
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
              onChange={(e) => params.handleInputChange(e)}
              value={params.inputValue ? params.inputValue.password : ''}
              placeholder='Customer password'
              id="passwordInput"></ input>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row'>
        <button type="button" onClick={() => params.handleDelete()} className="btn btn-outline-danger px-3 me-2">Delete</button>
        <button type="button" onClick={() => params.handleSave()} className="btn btn-outline-primary px-3 me-2">Save</button>
        <button type="button" onClick={() => params.handleCancel()} className="btn btn-outline-secondary px-3 me-2">Cancel</button>
      </div>
    </div>
  )
}

export default CustomerAddUpdateForm;