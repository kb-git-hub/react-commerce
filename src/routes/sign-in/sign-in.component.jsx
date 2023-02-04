import { Fragment } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log('📡 | file: sign-in.component.jsx:9 | logGoogleUser | userDocRef', userDocRef)
    }

  return (
    <Fragment>
        <button onClick={logGoogleUser}>Sign in with Google</button>
    </Fragment>
  )
}

export default SignIn