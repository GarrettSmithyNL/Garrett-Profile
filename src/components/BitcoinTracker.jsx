/*
 * This is the bitcoin price tracker, where we make an API call with async functions
 */

import { useEffect, useState } from "react";
import bitcoins from "../photos/coins.jpg";

const BitcoinTracker = () => {
  const [price, setPrice] = useState();

  useEffect(() => {
    const getPrice = async () => {
      const priceFromServer = await fetchPrice();
      setPrice(priceFromServer);
    };

    getPrice();
  }, []);
  // Gets the price from the API call
  const fetchPrice = async () => {
    const res = await fetch("https://blockchain.info/q/24hrprice");
    const data = await res.json();
    return data;
  };

  return (
    // Renders the image and price of the bitcoin in the app page
    <div className="bitcoinHolder">
      <img
        src={bitcoins}
        alt="Bitcoins"
      />
      <h3>This is todays price for Bitcoin:</h3>
      <h4>{`$${price}`}</h4>
    </div>
  );
};

export default BitcoinTracker;
