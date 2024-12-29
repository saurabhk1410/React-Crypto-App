/* eslint-disable react/prop-types */
const CoinCard = ({id,image,currencySymbol,price,name,symbol}) => {
    return (
      <div className="flex flex-col  items-center gap-y-4 h-auto  w-72 p-4 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
          <img className="h-12" src={image} />
          <h1 className="font-bold">{symbol}</h1>
          <p className="truncate">{name}</p>
          <p className="truncate">{price ? `${currencySymbol}${price}` : "NA"}</p>
      </div>
    )
  }
  
  export default CoinCard