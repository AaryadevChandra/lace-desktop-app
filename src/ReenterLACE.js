import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
const ReenterLACE = () => {

  const navigate = useNavigate()

    const userLogin = ()=> {
        let uid = document.getElementById('uid-input').value
        let password = document.getElementById('password-input').value

        axios({
            method: 'post',
            url: 'http://localhost:5000/lace/login',
            headers: {
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            data: {
                'uid': uid,
                'password': password,
            }
        }).then(res=>{
            console.log(res)
            if ( res.data ) {
                alert('Logged in')
                navigate('/chat-page', {state: {uid: uid}})
                
            }
            else if ( res.data == -1) {
                alert('Error logging in')
            }

        }).catch(err=>console.log(err))
    }   

  return (
    <>
      <div
        style={{
          display: "flex",
          border: "0px solid red",
          flexDirection: "row",
          backgroundColor: "#181414",
          color: "white",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "0px solid yellow",
            width: "50%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "0px solid white",
              flexDirection: "column",
              width: '40vw'
            }}
          > 
          
            <div
              style={{
                display: "flex",
                border: "0px solid green",
                fontSize: 20,
                fontWeight: "bolder",
                padding: "20px",
                justifyContent: "center",
              }}
            >
              Welcome to <p style={{color:"#8c64e2"}}>&nbsp;L.A.C.E</p>
            </div>

            <div style={{ display: "flex", border: "0px solid green" }}>
              <div
                style={{ flex: 1, border: "0px solid red", padding: "10px" }}
              >
                <p>Unique Identifier</p>
                <input
                id='uid-input'
                placeholder="Enter your UID"
                  style={{
                    backgroundColor: "#201c1c",
                    borderRadius: "10px",
                    outline: "none",
                    borderWidth: "1px",
                    borderColor: "#2c3028",
                    padding: "8px",
                    width: "100%",
                    color:'white'
                  }}
                />
              </div>
            </div>
            <div style={{ flex: 1, border: "0px solid red", padding: "10px" }}>
              <p>Password</p>
              <input
              id="password-input"
                placeholder="Enter your password"
                style={{
                    color:'white',
                  backgroundColor: "#201c1c",
                  borderRadius: "10px",
                  outline: "none",
                  borderWidth: "1px",
                  borderColor: "#2c3028",
                  padding: "8px",
                  width: "100%",
                }}
              />
            </div>
            {/* sign up button */}

            <Button
            onClick={userLogin}
              style={{
                display: "flex",
                border: "0px solid white",
                backgroundColor: "white",
                justifyContent: "center",
                color:'black',
                margin:'3vh',
                borderRadius:'10px',
                padding:'8px',
                width:'60%',
                alignSelf:'center'
              }}
            >
              Login
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "0px solid yellow",
            width: "50vw",
            height: "100vh",
          }}
        >
          <ReactSVG src="./assets/ripple.svg"/>

        </div>
      </div>
    </>
  );
};

export default ReenterLACE;
