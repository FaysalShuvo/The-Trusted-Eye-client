import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
const stripePromise = loadStripe(
  "pk_test_51Ie0agH9qSpFLdCVbhlpsaixRuubqwYHEN48uaaMYdP4meXg6yNWhFTwJJVTcTjgjxCJc6TKWHMfYQk1LcdE59xE003nx6VxIW"
);

const Payment = ({ found }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm found={found} />
    </Elements>
  );
};

export default Payment;
