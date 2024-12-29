/* eslint-disable react/prop-types */

const ExchangeCard = ({image,id,rank,url}) => {
  return (
    <a href={url} target="blank" className="flex flex-col items-center gap-y-4 h-auto  w-72 p-4 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
        <img src={image} />
        <h1 className="font-bold">{rank}</h1>
        <p className="truncate">{id}</p>
    </a>
  )
}

export default ExchangeCard