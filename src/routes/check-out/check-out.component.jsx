import './check-out.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

const CheckOut = () =>{

    const {cartItems, total} = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>

            ))}
            <span className='total'>Total: ${total}</span>
            <PaymentForm/>
        </div>
    )
}

export default CheckOut