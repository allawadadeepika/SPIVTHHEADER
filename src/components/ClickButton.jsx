import React,{useState} from "react";
function ClickButton(){
    const[message,setMessage] = useState('');
    function handleClick(){
        setMessage("you clicked me ");

    }
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p>{message}</p>    
            <br />
        </div>
    )
}
export default ClickButton;