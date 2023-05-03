import React,{useState, useEffect} from "react";
import MyContext from "./context/MyContext";
import ExampleContextComponent from "./components/ExampleContextComponent";

export default function Context(){

    const sharedData = {
        message: 'Hello from Context'
    };

    return(
        <div className="Context">
            <MyContext.Provider value = {sharedData}>
                <ExampleContextComponent/>
            </MyContext.Provider>
        </div>
    );
}