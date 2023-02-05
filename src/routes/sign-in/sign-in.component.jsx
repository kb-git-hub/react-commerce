import { Fragment } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

  return (
    <Fragment>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        <SignUpForm/>
    </Fragment>
  )
}

export default SignIn