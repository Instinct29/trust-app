import React, { useState } from 'react'
import useForm from './useForm';
import "./table.css"

const DataTable = () => {


     const {contacts} = useForm();
    //  console.log(contacts)
    

   

  return (
    
    <div className='tableData'>

          <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Profile Pic</th>
                      <th>Education</th>
                      <th>Password</th>
                      <th>Confirmed Password</th>
                  </tr>
              </thead>
              <tbody> 
                      {
                        contacts.map((contact)=>
                        <tr>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.dob}</td>
                          <td>{contact.gender}</td>
                          <td>{contact.file}</td>
                          <td>{contact.education}</td>
                          <td>{contact.password}</td>
                          <td>{contact.password2}</td>
                        </tr>)
                      }
                   
              </tbody>
          </table>



    </div>
  )
}

export default DataTable;













