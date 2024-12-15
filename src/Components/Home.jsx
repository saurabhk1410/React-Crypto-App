import image from "../Assets/image.png"
const Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-800 flex justify-center items-center'>
        <div className='w-2/3 sm:w-2/3 md:w-1/3 flex flex-col items-center'>
        <img className='animate-bounce' src={image} alt="" />
        <p className='text-white text-5xl -translate-y-12'>Xcrypro</p>
        </div>
    </div>
  )
}

export default Home