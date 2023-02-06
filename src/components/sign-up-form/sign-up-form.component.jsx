import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'
import Button from "../button/Button.component"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const resetFormFields = () =>{ setFormFields(defaultFormFields)}
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value})
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords must match to proceed')
            return
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()

        } catch(err){
            if (err.code === 'auth/email-already-in-use') alert('Email already in use...')
            else console.log(err.message)
        }

    }


    return (
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
                labelTextContent='Display Name'
                required type="text"  onChange={handleChange} 
                name='displayName' value={displayName}
            />
            <FormInput
                labelTextContent='Email'
                required type="email"  onChange={handleChange} 
                name='email' value={email}
            />
            <FormInput
                labelTextContent='Password'
                required type="password"  onChange={handleChange} 
                name='password' value={password}
            />
            <FormInput
                labelTextContent='Confirm Password'
                required type="password"  onChange={handleChange} 
                name='confirmPassword' value={confirmPassword}
            />
            <Button type='submit'>Sign up</Button>
        </form>
    </div>
  )
}

export default SignUpForm