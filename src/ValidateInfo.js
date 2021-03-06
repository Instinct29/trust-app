export default function validateInfo(values){
    let errors = {};

    if(!values.name.trim()){
        errors.name = "Name Required"
    }

    //Email

    if(!values.email){
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.dob){
      errors.dob = "Please provide DOB"
    }

    
    if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }
    
      if (!values.password2) {
        errors.password2 = 'Password is required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      }
      return errors;
    
}




//Almost all done- few inputs error handlings remaining will do it later :]