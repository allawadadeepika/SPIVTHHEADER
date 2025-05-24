import React,{ useState } from "react"

function InputBar(){
    const[name,setName]=useState('');
    function handleChange(event){
        setName(event.target.value);
    }
    return(
        <div>
            <input type="text" 
                    placeholder="Enter your name" 
                    onChange={handleChange}>
            </input>
            <p>Hey, {name}</p>
        </div>
    )
}
export default InputBar;                                                                                                                                                                                                                                    