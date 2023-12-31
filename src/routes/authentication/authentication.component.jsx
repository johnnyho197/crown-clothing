import SignUp from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUp/>    
        </div>
    )
}

export default Authentication