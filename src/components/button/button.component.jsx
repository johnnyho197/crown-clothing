import { ClipLoader} from 'react-spinners'
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, isLoading, ...otherProps}) => {
    return (
        <button disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}> 
            {isLoading? (
                <div className='spinner-container'>
                    <ClipLoader size={25} color="#696969"/>
                </div>) : 
                (children)
            } 
        </button>
    )
}

export default Button