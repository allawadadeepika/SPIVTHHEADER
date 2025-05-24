import React from "react";

function Greeting(props){
    const currentHour=new Date().getHours()
    let greetMessage;
    if(currentHour<12){
        greetMessage='Good Morning';
    }
    else if(currentHour<18){
        greetMessage='Good Afternoon';
    }
    else{
        greetMessage='Good Evening';
    }
    return( <div>
        <h1>Hello, World welcome to my app!</h1>
        <h2>{greetMessage}</h2>
        <h2>my name is {props.name}</h2>
        
    </div>
    )
}
export default Greeting;