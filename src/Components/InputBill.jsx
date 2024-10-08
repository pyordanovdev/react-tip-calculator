function InputBill({ billAmount, setBillAmount }) {
  return (
    <label htmlFor='bill-amount'>
      How much was the bill?
      <input
        type='text'
        value={billAmount}
        onChange={(e) => {
          if (e.target.value < 0 || isNaN(e.target.value))
            return alert("Please enter a valid number");
          setBillAmount(+e.target.value);
        }}
        className='bill-amount'
        id='bill-amount'
      />
    </label>
  );
}

export default InputBill;
