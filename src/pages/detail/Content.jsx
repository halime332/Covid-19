import React from 'react'
import { useSelector } from 'react-redux';

const Content = () => {
    const{isLoading,error,data} = useSelector((store)=>store.covidReducer);
  return (
    <div>Content</div>
  )
};

export default Content;