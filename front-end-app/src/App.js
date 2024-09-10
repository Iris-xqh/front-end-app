import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className='container d-flex flex-column justify-content-center w-50'>
      <div className='fs-4 fw-bold mb-4'>
        Customer List
      </div>

      <div >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iris</td>
              <td>iris@qq.com</td>
              <td>123456</td>
            </tr>
            <tr>
              <td>Daivd</td>
              <td>dsf@outlook.com</td>
              <td>3333</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>bobb@gmail.com</td>
              <td>2222</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='fs-4 fw-bold mb-4'>
        Updates
      </div>
      <div>
        <div class="row mb-3">
          <div class="col-2">
            Name:
          </div>
          <div class="col-6">
          <input class="form-control w-100" id="nameInput"></ input>
          </div>
        </div>
        <div class="row mb-3">
        <div class="col-2">
            Email:
          </div>
          <div class="col-6">
          <input class="form-control w-100" id="emailInput"></ input>
          </div>
        </div>
        <div class="row mb-3">
        <div class="col-2">
            Password:
          </div>
          <div class="col-6">
          <input class="form-control w-100" id="passwordInput"></ input>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row'>
      <button type="button" class="btn btn-outline-danger px-3 me-2">Delete</button>
      <button type="button" class="btn btn-outline-primary px-3 me-2">Save</button>
      <button type="button" class="btn btn-outline-secondary px-3 me-2">Cancel</button>
      
      </div>
    </div>

  );
}

export default App;
