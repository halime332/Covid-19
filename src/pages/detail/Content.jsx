import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader from '../../components/loader/content-loader';
import Error from "../../components/error/index";
import Card from './Card';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../redux/action';

const Content = () => {
  const {code} =useParams();
  const dispatch =useDispatch();
    const{isLoading,error,data} = useSelector((store)=>store);
  
    const arr = Object.entries(data || {}).filter((i)=>i[0]!=="flags");
    
  return (
    <div className='text-black grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
      {isLoading ? <ContentLoader/> : error ?( <Error info={error} refetch={()=>dispatch(getDetails(code))}/>) : (
        <div >
          {arr.map((item,key)=><Card key={key} item={item} />)}
        </div>
        )}
    </div>
  )
};

export default Content;