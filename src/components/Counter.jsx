import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);  
    function increment() {
        setCount(count + 1);  
    }
    function decrement() {
        setCount(count - 1);  
    }
    return (
        <div> 
            <button   onClick={increment} >Increment</button>
            <button   onClick={decrement}>Decrement</button>
            <h2>Counter: {count}</h2>
        </div>
    );
}

export default Counter;