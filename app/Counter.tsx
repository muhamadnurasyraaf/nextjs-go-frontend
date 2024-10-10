'use client'
import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState<number>(0)

    return(
        <div>
            <p>You Clicked {count}</p>
            <button onClick={() => setCount(count + 1)}>Click to Add</button>
        </div>
    );
}