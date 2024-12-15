import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-full bg-slate-800 text-white flex gap-x-4 px-4 py-4 justify-center md:justify-start'>
        <Link to={"/"}>Home</Link>
        <Link to={"/coins"}>Coins</Link>
        <Link to={"/exchanges"}>Exchanges</Link>
    </div>
  )
}

export default Header