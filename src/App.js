import { useState } from "react";
import "./App.scss";
import { ReactComponent as Logo } from "./logo.svg";

const fee = 3;
const rate = 8.887;
const percent = 0.2;

// The equation
// ((400 - 20%) - 3) * 8.8 = 2789

function App() {
  const [price, setPrice] = useState(0.0);
  function handlePrice(e) {
    let res = +e.target.value;
    if (isNaN(res)) return;
    res -= res * percent;
    res -= fee;
    res *= rate;
    if (res > 0) setPrice(res.toFixed(2));
    else setPrice(0);
  }
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <form>
        <label>
          Payment Amount <span>(to presente)</span>
        </label>
        <input type="number" placeholder="0.00$" onChange={handlePrice} />
      </form>
      <div className="details">
        <div>
          <label>Exchange Rate</label>
          <label>Transfer Fee</label>
          <label>Amount Transferred to Bank Account</label>
        </div>
        <div>
          <span>1 USD &#8776; {rate.toFixed(4)} MAD</span>
          <span>$ {fee.toFixed(2)}</span>
          <span className="amount">&#8776; {price} MAD</span>
        </div>
      </div>
    </>
  );
}

export default App;
