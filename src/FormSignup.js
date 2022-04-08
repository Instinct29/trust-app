import React from 'react'
import useForm from './useForm';
import validate from './ValidateInfo';
import DataTable from './DataTable';
import './Form.css'


const FormSignup = () => {
    const{handleChange,values,handleSubmit,errors} = useForm(validate);
  
  return (
    <>


             <div>
             <form className="faaraam" onSubmit={handleSubmit}>

             <h1> Day 4 Assingment</h1>

             <div className='divv'>
             <label htmlFor='name'>Name</label>
             <input 
             id='name'
             type="text"
             name='name'
             placeholder='Enter Your Name' 
             value={values.name}
             onChange={handleChange}
             /> 
             {errors.name && <p>{errors.name}</p>}
             </div>

             <div className='divv'>
             <label htmlFor='email'>Email</label>
             <input 
             id='email'
             type="email"
             name='email'
             placeholder='Enter Your Email' 
             value={values.email}
             onChange={handleChange}
             /> 
             {errors.email && <p>{errors.email}</p>}
             </div>

             <div className='divv'>
               <label >Date Of Birth</label>
               <input type="date" name="dob" value={values.dob} onChange={handleChange}/>
               {errors.dob && <p>{errors.dob}</p>}
             </div>

             <div> 
              <label htmlFor='gender'>Gender</label>
             <br />
              <input type="radio" value="Female" onChange={handleChange} name="gender" /> Female
              <input type="radio" value="Male" onChange={handleChange} name="gender" /> Male
              <input type="radio" value="Other" onChange={handleChange} name="gender" /> Other
             </div>


             <div>
               <label >Profile Pic : </label>
               <input type="file" name="file" value={values.file} onChange={handleChange}/>
             </div>



             
            <div>
                 <label>Level of Education</label>
                 <select name='education' onChange={handleChange}>
                     <option value="Junior schooling">Junior schooling</option>
                     <option value="secondary schooling">secondary schooling</option>
                     <option value="Higher secondary schooling">Higher secondary schooling</option>
                     <option value="College">College</option>
                     <option value="University">University</option>
                 </select>
            </div> 

             

             <div className='divv'>
                 <label htmlFor='password'>Password</label>
                 <input 
                 id='password'
                 type="password" 
                 name="password"
                 placeholder='Enter Your Password'
                 value={values.password}
                 onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
             </div>

             <div className='divv'>
                 <label htmlFor='passwor2'>Confirm Password</label>
                 <input 
                 id='password2'
                 type="password" 
                 name="password2"
                 placeholder='Confirm your password'
                 value={values.password2}
                 onChange={handleChange}
                  />
                  {errors.password2 && <p>{errors.password2}</p>}
             </div>

             <button  type='submit'>Sign up</button>
             </form>
             </div>

            {console.log(values)}

            <DataTable maal={values} />


    </>
  )
}

export default FormSignup;






































/* <div> */
             /* <label>Gender</label>
             <br />
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Other" name="gender" /> Other
             </div>


             <div>
                 <label>Level of Education</label>
                 <select>
                     <option value="">Junior schooling</option>
                     <option value="">secondary schooling</option>
                     <option value="">Higher secondary schooling</option>
                     <option value="">College</option>
                     <option value="">University</option>
                 </select>
             </div> */