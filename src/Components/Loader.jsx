
// const Loader = () => {
//   return (
//     <div className="h-20 w-20 rounded-full  border-b-4 border-black animate-spin">
        
//     </div>
//   )
// }

// export default Loader

function Loader() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="h-40 w-40 rounded-full border-4 border-t-black border-r-black border-b-transparent border-l-transparent animate-spin"></div>
      </div>
    );
  }
  
  export default Loader;
  