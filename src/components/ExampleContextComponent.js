import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export default function ExampleContextComponent() {

    const context = useContext(MyContext);

    return (
        <div>
            {context.data.counter}
            <button onClick={() => {
                context.setData({...{ counter: context.data.counter + 1 }})
            }}>
                +
            </button>
        </div>
    );
}