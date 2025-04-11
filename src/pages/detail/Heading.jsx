import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import HeaderLoader from '../../components/loader/header-loader';

const Heading = () => {
    const{isLoading,data} = useSelector((store)=>store.covidReducer);
 console.log(data);
  return (
    <div className='flex justify-between items-center'>
       
       <Link to="/" className='bg-gray-400 py-2 px-2 pe-3 rounded-md
       hover:bg-gray-500 flex gap-2 items-center shadow'>
         <IoIosArrowBack />
          Geri
       </Link>
  
       {isLoading  ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold font-sans">
              {data.country}
            </h1>
          </div>
        )
      )}
      
    </div>
  );
};

export default Heading;