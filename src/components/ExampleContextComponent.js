import React,{useContext} from "react";
import MyContext from "../context/MyContext";

export default function ExampleContextComponent(){

    const context = useContext(MyContext);

    return(
        <div>
            {context.message}
        </div>
    );
}