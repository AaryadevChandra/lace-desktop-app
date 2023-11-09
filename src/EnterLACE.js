import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Svg} from './assets/ripple.svg'
const EnterLACE = () => {



    const navigate = useNavigate()

    const userSignUp = ()=> {
        let fname = document.getElementById('first-name-input').value
        let lname = document.getElementById('last-name-input').value
        let title = document.getElementById('org-title-input').value


        console.log(`Sending signup request for ${fname + lname , title}`)

        axios({
            method: 'post',
            
            url: 'http://34.123.247.181:8082/lace/signup',
            headers: {
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            data: {
                'fname': fname,
                'lname': lname,
                'title': title
            }
        }).then(res=>{

          console.log('HERE')
          console.log(res.data)

            if ( res.data != undefined && res.data != -1 ) {

              let account_data_returned = res.data

                alert(`Account created successfully\nPlease copy the following information\nUID:${account_data_returned['account_uuid']}\nPassword:${account_data_returned['account_password']}`)
                navigate('/login')
                
            }
            else if ( res.data == -1) {
                alert('Error creating account')
            }


        }).catch(err=>console.log(err))
    }

    const userLogin = ()=> {

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

            <div
              style={{
                display: "flex",
                border: "0px solid green",
                flexDirection: "row",
              }}
            >
              <div
                style={{ flex: 1, border: "0px solid red", padding: "10px" }}
              >
                <p>First Name</p>
                <input
                id='first-name-input'
                placeholder="Enter your first name"
                  style={{
                    backgroundColor: "#201c1c",
                    borderRadius: "10px",
                    outline: "none",
                    borderWidth: "1`px",
                    borderColor: "#2c3028",
                    padding: "8px",
                    color:"white"
                  }}
                />
              </div>

              <div
                style={{ flex: 1, border: "0px solid red", padding: "10px" }}
              >
                <p>Last Name</p>
                <input
                id='last-name-input'
                placeholder="Enter your last name"
                  style={{
                    backgroundColor: "#201c1c",
                    borderRadius: "10px",
                    outline: "none",
                    borderWidth: "1px",
                    borderColor: "#2c3028",
                    padding: "8px",
                    color:'white'
                  }}
                />
              </div>
            </div>
            <div style={{ display: "flex", border: "0px solid green" }}>
              <div
                style={{ flex: 1, border: "0px solid red", padding: "10px" }}
              >
                <p>Organisational Title</p>
                <input
                id='org-title-input'
                placeholder="Enter your title"
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
            {/* <div style={{ flex: 1, border: "0px solid red", padding: "10px" }}>
              <p>Password</p>
              <input
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
            </div> */}
            {/* sign up button */}

            <Button
            onClick={userSignUp}
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
              Sign Up
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
          <Svg height={"500px"} width={"500px"}/>
        </div>
      </div>
    </>
  );
};

export default EnterLACE;
