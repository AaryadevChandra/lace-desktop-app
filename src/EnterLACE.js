import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
const EnterLACE = () => {
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
            width: "50vw",
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
                placeholder="Enter your first name"
                  style={{
                    backgroundColor: "#201c1c",
                    borderRadius: "10px",
                    outline: "none",
                    borderWidth: "1px",
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
                <p>Unique Identifier</p>
                <input
                placeholder="Enter your unique identifier"
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
        ></div>
      </div>
    </>
  );
};

export default EnterLACE;
