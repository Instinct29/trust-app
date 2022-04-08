import React from 'react'
import useForm from './useForm';

const DataTable = ({maal}) => {

    const {values} = useForm();
    console.log(values);

  return (
    
    <div>

          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Profile Pic</th>
                      <th>Education</th>
                      <th>Password</th>
                      <th>Confirmed Password</th>
                  </tr>
              </thead>
              <tbody>  
                <tr>
                      <td>{maal.name}</td>
                      <td>{maal.email}</td>
                      <td>{maal.dob}</td>
                      <td>{maal.gender}</td>
                      <td>{maal.file}</td>
                      <td>{maal.education}</td>
                      <td>{maal.password}</td>
                      <td>{maal.password2}</td>
                  </tr>   
              </tbody>
          </table>



    </div>
  )
}

export default DataTable;