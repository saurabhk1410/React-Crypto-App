
const Footer = () => {
  return (
    <div className='w-full py-4 px-8 bg-slate-900 text-gray-400 flex flex-col gap-y-10 md:flex-row md:justify-between md:items-center md:gap-x-20'>
        <div className='flex flex-col items-center md:items-start'>
            <h1 className='font-bold text-xl my-2'>About Us</h1>
            <p>We are the best crypto trading app in India, we provide our guidance at a very cheap price</p>
        </div>
        <div className='flex flex-col items-center'>
            {/* <img className='rounded-full h-24' src="https://avatars.githubusercontent.com/u/160416508?s=400&u=27907b40860779ce107e78e82fb553e9ea3b22a6&v=4" alt="saurabhkumar" /> */}
            <img className='rounded-full h-24' src="https://avatars.githubusercontent.com/u/135420472?v=4" alt="Shubham Jaiswal" />
            <p>Founder</p>
            <p>Shubham Jaiswal</p>
        </div>
    </div>
  )
}

export default Footer