import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {

    return (
        <div id="header-parent-div" className="shadow" style={{position:'sticky', top:'0px', display: 'flex', border: '0px solid purple', minHeight: '10vh',  width:'100%', marginBottom:'10px', backgroundColor: '#0b0f19'}}>
            <div style={{display:'flex', flex: 2, border: '0px solid red',  justifyContent:'flex-start', alignItems:'center', marginLeft:'4vw'}}>
                <p style={{display:'flex', color:'white', fontSize: '4vh', border: '0px solid white', alignItems:'center'}}>L.A.C.E</p>
            </div>
            <div style={{display:'flex', flex:1 ,border: '0px solid red', justifyContent:'flex-end', marginRight:'5vw', alignItems:'center'}}>
                <p style={{ display:'flex', color:'white', fontSize: '3vh', border: '0px solid white', alignItems:'center'}}>Welcome</p>
            </div>
        </div>
    );

}

export default Header;