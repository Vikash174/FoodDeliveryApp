const Payment = () => {
  return (
    <div className="payment-container">
      <PaymentTitle />
      <ProceedToPay />
    </div>
  );
};

const PaymentTitle = () => {
  return <h3>Choose payment method</h3>;
};

const ProceedToPay = () => {
  return <button id="ptc-btn">PORCCEED TO PAY </button>;
};

export default Payment;
