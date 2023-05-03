import React,{useState, useEffect} from "react";
import MyContext from "./context/MyContext";

export default function Context(){

    const sharedData = {
        message: 'Hello from Context'
    };

    return(
        <div className="Context">

        </div>
    );
}