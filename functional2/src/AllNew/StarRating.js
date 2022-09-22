import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const StarRating=()=>{
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)
    return(
        <div>
            {
                [...Array(5)].map((item,index)=>(
                    <label>
                        <input type='radio' style={{display: 'none'}} onClick={()=>setRating(index+1)}/>
                        <FaStar size={100} onMouseEnter={()=>setHover(index+1)} onMouseLeave={()=>setHover(null)} color={index+1<=(hover||rating)?'#ffc107':'#e4e5e9'} style={{cursor: 'pointer'}}/>
                    </label>
                ))
            }
            <p>The rating is {rating}/5.</p>
        </div>
    )
}
export default StarRating