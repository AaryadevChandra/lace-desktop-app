import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const BotTextBox = (props) => {


    return (
        <div className="shadow" style={{display: 'flex', width: '70%', justifyContent:'flex-start', border: '0px solid white', color:"white", backgroundColor: '#282c3c', padding: '1vw', borderRadius:'20px', margin: '1vw'}}>
            <p style={{marginRight:'7vw'}}>{props.text}</p>
        </div>
    );

}

export default BotTextBox;