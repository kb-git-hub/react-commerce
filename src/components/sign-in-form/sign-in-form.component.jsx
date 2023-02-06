import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'
import Button from "../button/Button.component"

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password} = formFields

    
    const resetFormFields = () =>{ setFormFields(defaultFormFields)}
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value})
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try{
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch(err){
            switch(err.code){
                case 'auth/wrong-password': 
                    alert('Incorrect Password')
                    break

                case 'auth/user-not-found': 
                    alert('User not found')
                    break

                default:
                    console.log(err.message)
            }
        }
    }

    const signInWithGoogle = async () =>{
        await signInWithGooglePopup()
    }

    return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={handleSubmit}>
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

            <div className="buttons-container">
                <Button type='submit'>Sign in</Button>
                <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign in</Button>
            </div>
           
        </form>
    </div>
  )
}

export default SignInForm