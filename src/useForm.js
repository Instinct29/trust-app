import {useState} from "react"


const useForm = (validate)=>{
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

    const [errors, setErrors] = useState({});

    const handleChange = (e)=>{
        const{name,value} = e.target;

        setValues({
            ...values,
            [name] : value
        })
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        setErrors(validate(values));
        console.log(values);
    }

    return {handleChange , values, handleSubmit, errors}
}

export default useForm;
