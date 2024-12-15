/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import ExchangeCard from "./ExchangeCard";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader"
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading,setloading]=useState(true);
  const [Error,setError]=useState(false);
  const func = async () => {

    try {
      const res = await axios.get("https://api.coingecko.com/api/v3/exchanges");
      // console.log(res.data);
      setExchanges(res.data);
      setloading(false);
    
    } 
    catch (error) {
      setError(true);
      setloading(false);
      // console.log(error);
    }
  };

  useEffect(() => {
   func();
  }, []);


  if(Error) return (<ErrorComponent message={"Unable to fetch Exchanges"}/>);

  return (
    <div className="w-full">
    
     { loading? <Loader/>:
         <div className="flex flex-wrap gap-4 px-4 py-4 justify-center">
{
     exchanges.map((i) => {
        return (
          <ExchangeCard
            image={i.image}
            id={i.name}
            rank={i.trust_score_rank}
            url={i.url}
            key={i.id}
          />  
        );} )
      }
</div>
      }
    
    </div>
  );
};

export default Exchanges;
