/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { server } from "../main";
import axios from "axios";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const btns=new Array(132).fill(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  const changePage = (page) => {
    setPage(page);
    setLoader(true);
  };

  useEffect(() => {
    const ApiCallFunc = async () => {
      console.log(page,loader);
      
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setError(false);
        setCoins(data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        
        setError(true);
        setLoader(false);
      }
    };

    ApiCallFunc();
  }, [page, currency]);

  if (error) return <ErrorComponent message={"Error while fetching coins"} />;

  
  return (
    <div className="w-full">
           {
            loader?<Loader/>:
            <>
            <div className="w-full flex gap-x-4 px-10 py-4 justify-center">
            <input type="radio"  name="options" value={"inr"} className="focus:ring-blue-500" id="inr" onChange={()=>{setCurrency("inr")}}/>
             <label htmlFor="inr">INR</label>
            <input type="radio" name="options" value={"usd"} className="focus:ring-blue-500" id="usd"  onChange={()=>{setCurrency("usd")}}/>  
            <label htmlFor="usd">USD</label>
            <input type="radio" name="options" value={"eur"} className="focus:ring-blue-500" id="eur" onChange={()=>{setCurrency("eur")}}/> 
            <label htmlFor="eur">EUR</label>
            </div>

            <div className="flex flex-wrap gap-4 px-4 py-4 justify-center">
{
     coins.map((i) => {
        return (
          <CoinCard
            image={i.image}
            id={i.id}
            name={i.name}
            symbol={i.symbol}
            price={i.current_price}
            currencySymbol={currencySymbol}    
            key={i.id}
          />  
        );} )
      }
</div>

            <div className="flex overflow-auto px-10">
              {btns.map((item,index)=>{
                
                return <button className="bg-cyan-500 p-4 m-2" onClick={()=>{setPage(index+1); setLoader(true)}}>{index+1}</button>
              })
              }
            </div>
            </>
           }
    </div>
  )
};

export default Coins;
