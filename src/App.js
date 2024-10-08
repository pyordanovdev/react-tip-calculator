import { useState } from "react";
import InputBill from "./Components/InputBill";
import SelectSatisfaction from "./Components/SelectSatisfaction";
import PaymentTotal from "./Components/PaymentTotal";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [personalServiceSatisfaction, setPersonalServiceSatisfaction] =
    useState(0);
  const [friendServiceSatisfaction, setFriendServiceSatisfaction] = useState(0);

  function reset() {
    setBillAmount(0);
    setPersonalServiceSatisfaction(0);
    setFriendServiceSatisfaction(0);
  }

  function calculateTip(
    billAmount,
    personalServiceSatisfaction,
    friendServiceSatisfaction
  ) {
    const totalTip =
      (personalServiceSatisfaction + friendServiceSatisfaction) / 2;
    return billAmount * (totalTip / 100);
  }

  const totalTip = calculateTip(
    billAmount,
    personalServiceSatisfaction,
    friendServiceSatisfaction
  );
  const totalBill = billAmount + totalTip;
  return (
    <div className='app'>
      <h1>Tip Calculator</h1>

      <InputBill billAmount={billAmount} setBillAmount={setBillAmount} />
      <SelectSatisfaction
        value={personalServiceSatisfaction}
        setValue={setPersonalServiceSatisfaction}
      >
        How did you like the service?
      </SelectSatisfaction>

      <SelectSatisfaction
        value={friendServiceSatisfaction}
        setValue={setFriendServiceSatisfaction}
      >
        How did your friend like the service?
      </SelectSatisfaction>

      <PaymentTotal
        totalBill={totalBill}
        billAmount={billAmount}
        totalTip={totalTip}
      />
      <button className='reset' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
