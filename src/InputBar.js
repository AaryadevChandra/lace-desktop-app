import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const InputBarComponent = (props) => {

    return (
        <div id="footer-parent-div" style={{display:'flex', backgroundColor: '#0b0f19', padding:'30px', border: '0px solid yellow', justifyContent:'center', bottom:'0px', position:'fixed', width: '100%'}}>

        <div className="shadow" style={{display: 'flex', width: '70%', minHeight:'15vh', border: '0px solid green', backgroundColor: '#1f2937', 
        borderRadius: '10px', flexDirection: 'column', padding: '15px'}}>
            <div style={{display:'flex', color: 'white', marginLeft:'1vw', marginBottom:'5px'}}>
                Input
            </div>
                
            <input id='user_natlang_input_text' type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
            style={{display:'flex', borderWidth:'1px', borderStyle:'solid', borderColor:'#344454', minHeight: '6vh', width: '80%', marginLeft:'1vw',
             marginTop:'5px', backgroundColor: '#202c34', color:'white'}} onKeyDown={(e)=>{

                if ( e.key == "Enter"){
                    props.addUserBox(document.getElementById("user_natlang_input_text").value)
                }

            }}/>
        </div>
        </div>

    );

}

export default InputBarComponent;