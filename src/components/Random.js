//import axios from 'axios';
//import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';
//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random =()=>{
    
    const{gif,loading,  fethdata}=UseGif();
   
   
return (
<div className='w-[50vw]   bg-green-500 rounded-lg
 border border-black
 flex flex-col items-center gap-y-5 mt-[15px] '>
    <h1 className='text-2xl underline uppercase font-extrabold mt-6'>a Random gif</h1>
    {
        loading ? <Spinner/>: ( <img src={gif} width="450"/>)
    }

    <button onClick={() => fethdata()} className='w-10/12 bg-yellow-50 rounded-md mb-8 text-lg py-2 opacity-100 ' >Generate</button>
</div>
)
}
export default Random