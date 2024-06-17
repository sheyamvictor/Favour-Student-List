import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function List() {

const Namelist=["Deva","Jesu","Keshav","Sheyam"]

const [Favourite,setFavourite]=useState([])

function handelFavour(event,item){
 
setFavourite([...Favourite,item])

event.target.textContent="Added to Favourite"


}
console.log(Favourite);

  return (
    <>
    <div className="bg-rose-300 text-center flex gap-5 p-5 align-middle flex-wrap">
      <h1 className='text-3xl  '>Student-Name /</h1>
       <Link to ='/Favourite' state= {Favourite} ><h1 className='text-3xl'>Favourite-Student</h1></Link> 
        </div>
       
        
        <h1 className='text-2xl font-medium underline text-center p-2'>Student-name</h1>
<div className="text-center mt-6 font-extralight">
 
        <ol>
          {Namelist.map((item,index)=>(
        <li className='flex justify-evenly p-5 gap-8 text-2xl'key ={index}>{item} <button className='bg-purple-400  text-black border rounded-md w-60 text-center' onClick={(event)=>{handelFavour(event,item)}}>Add Favour</button> </li>
        ))}
        </ol>
        
        </div>
        
        </>
   
  )
}

export default List