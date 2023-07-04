import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import Button from "../button/button.component";

import './payment-form.styles.scss'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const {total} = useContext(CartContext);
    const {currentUser} = useContext(UserContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) =>{
        e.preventDefault();

        if (!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent',{
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: total * 100 })
        }).then (res => res.json());

        const {paymentIntent: {client_secret}} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser? currentUser.displayName : 'Guest'
                }
            }
        })

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert("Please type in your card number to process payment");
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    };

    return (
        <div className="payment-form-container">
            <form className="form-container" onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <div className="pay-button-container">
                    <Button 
                        isLoading = {isProcessingPayment} 
                        buttonType="inverted">
                        Pay Now
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PaymentForm