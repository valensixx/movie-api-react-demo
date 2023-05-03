import React,{useState, useEffect} from "react";
import MyContext from "./context/MyContext";
import ExampleContextComponent from "./components/ExampleContextComponent";

export default function Context(){

   // const sharedData = {
        //message: 'Hello from Context'
    //}; <MyContext.Provider value = {{sharedData}

    const [data, setData] = useState({counter: 0});

    return(
        <div className="Context">
            <MyContext.Provider value = {{data: data, setData:setData}}> 
                <ExampleContextComponent/>
            </MyContext.Provider>
        </div>
    );
}