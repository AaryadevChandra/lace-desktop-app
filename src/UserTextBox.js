import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
const UserTextBox = (props) => {


    // box len

    return (
        <div className="shadow" style={{display: 'flex', width: '70%', justifyContent:'flex-end', border: '0px solid white', color:"white", backgroundColor: '#181c24', 
        padding: '1vw', borderRadius:'20px', margin: '1vw'}}>
            <p style={{textAlign:'right', marginRight:'1vw'}}>{props.text}</p>
        </div>
    );

}


export default UserTextBox;
