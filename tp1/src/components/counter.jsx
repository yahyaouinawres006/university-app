import {useState} from "react"
export const Counter = () =>{
    //let count =0;
const[count,setCount]=useState(0);
    const handleClick =() =>{
        count ++;
        console.log(count);
    }
    return (
        <>
        <h1>counter:{count}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    );
}