const CustomerList = (params) => {

    return(
        <div>
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
            {params.customers.map(row => (
              <tr key={row.id}
                onClick={() => params.handleRowClick(row)}
                style={{ fontWeight: row.id === params.selectedRow ? 'bold' : 'normal' }}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    )
}

export default CustomerList;