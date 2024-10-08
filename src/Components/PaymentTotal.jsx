function PaymentTotal({ totalBill, billAmount, totalTip }) {
  return billAmount > 0 ? (
    <p className='payment-total'>
      You pay ${totalBill} (${billAmount} + ${totalTip} tip)
    </p>
  ) : (
    ""
  );
}

export default PaymentTotal;
