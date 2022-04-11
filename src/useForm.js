import {useState} from "react"
import Infos from './Infos.json'


const useForm = (validate)=>{

    //Input fields => InputValue state
    const [values, setValues] = useState({
        name:"",
        email:"",
        dob:"",
        gender:"",
        file:"",
        education:"",
        password:"",
        password2:"",

    })

    //Change handler which keep trak of the values
    const handleChange = (e)=>{
        const{name,value} = e.target;

        setValues({
            ...values,
            [name] : value
        })
    };
    const [contacts, setContacts] = useState(Infos);


    // New contact that we got from the values
      
    const newContact = {
        name: values.name,
        email: values.email,
        dob: values.dob,
        gender: values.gender,
        file: values.file,
        education: values.education,
        password: values.password,
        password2: values.password2,

    }


    const [errors, setErrors] = useState({});


    const handleSubmit = (e)=>{
        e.preventDefault();

        setErrors(validate(values));

        //Wait

        const allContacts = [...contacts,newContact];
        setContacts(allContacts);
        
        
        console.log(values);
        console.log(contacts);
        console.log(newContact);
        console.log(allContacts);
        console.log(contacts);


    }

    
    

    return {handleChange , values, handleSubmit, errors, contacts}
    
}



export default useForm;
