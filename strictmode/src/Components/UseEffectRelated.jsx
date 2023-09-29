import React, { useEffect, useState } from 'react'

const UseEffectRelated = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("effect")
        function handler(){
            console.log(count)
        }
        document.addEventListener("keypress",handler)
        // here due to strict mode useEffect fired twice because of which useEffect is invoking 
        // event handler function twice so its printing twice.But it shouldn't happen.So we need to
        // write clean up function 
        return ()=>{
            document.removeEventListener("keypress",handler)
        }
    },[count])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>useEffect's count:{count}</button>
    </div>
  )
}

export default UseEffectRelated
