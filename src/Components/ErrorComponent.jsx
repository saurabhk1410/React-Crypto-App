/* eslint-disable react/prop-types */
const ErrorComponent = ({ message }) => {
  return (
    <div className="w-full py-56 px-10">
      <div className=" bg-red-200 w-full p-4 text-2xl rounded-md text-gray-500 flex items-center" >
      <span className="flex justify-center items-center w-8 h-8 rounded-full bg-red-600 mr-8 text-white">!</span>  
      <span>{message}</span>
      </div>
    </div>
  );
};

export default ErrorComponent;
