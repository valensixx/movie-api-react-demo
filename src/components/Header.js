import React from "react";

export default function Header(){
    const styles = {
        header:{
            backgroundColor: '#4b51bf',
            padding: 25,
            color: 'white',
            fontSize: 24,
            textAlign:'center',
        }
    }
    return(
        <>
            <header style={styles.header}>
                Movie Search App
            </header>
        </>
    );
}