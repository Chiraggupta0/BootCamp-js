import React, { useEffect, useState } from 'react'
const UseEffectOne = () => {
    const[count,setCount] = useState(0);
    useEffect(()=>{
        alert("incremented count")
    },[count]);
    const handleclickalert=(()=>{
        setCount(count+1)
    })


    const[counttwo,setCounttwo] = useState(0);
    useEffect(()=>{
        console.log("clicked");
    },[counttwo]);
    const handleclick=(()=>{
        setCounttwo(counttwo+1)
    })
    // useEffect(()=>{
    //     // side effect
    //     return ()=>{
    //         // clean-up/unmounting function
    //     }
    // },[]) //dependency array
  return (
    <>
    <div>UseEffectOne</div>
    <div>click{count}</div>
    <button onClick={handleclickalert}>alert</button>
    <div>click{counttwo}</div>
    <button onClick={handleclick}>just increment</button>
    </>
  )
}

export default UseEffectOne
