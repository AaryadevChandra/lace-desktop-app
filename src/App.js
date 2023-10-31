import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UserTextBox from './UserTextBox';
import React, { useState, useRef } from 'react';
import BotTextBox from './BotTextBox';
import InputBarComponent from './InputBar';
import axios from 'axios';
import Header from './Header';

function ChatPage() {

  // var sampleUserText = "Eating raw fish didn't sound like a good idea. It's a delicacy in Japan, didn't seem to make it any more appetizing. Raw fish is raw fish, delicacy or not."
  // var sampleBotText = "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes."

  var [userNatlangInput, setUserNatlangInput] = useState('');
  var [currID, setCurrID] = useState(-1);

  // assumption: there will always be a response text box for an input, may even be error but there should always be some response BotTextBox
  var [userTextBoxes, setUserTextBoxes] = useState([])
  var [botTextBoxes, setBotTextBoxes] = useState([])

  var [textBoxes, setTextBoxes] = useState([
    
  ])

  
  const addUserTextBox = (text) => {

    setTextBoxes([...textBoxes, <UserTextBox key={currID} text={text}/>])


    // call backend for added text box as well
    axios({
      method:'get',
      url: 'https://catfact.ninja/fact',
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(res=>{
      
      setCurrID(currID += 2)
      setTextBoxes([...textBoxes, [<UserTextBox key={currID} text={text}/>, <BotTextBox key={currID + 1} text={res.data.fact}/>]])

    }).catch(err=>console.log(err)).finally(()=>{
      console.log(textBoxes)
    })
    
  }

  return (
    <div id="topmost-parent-div" style={{display:'flex', border: '0px solid red', backgroundColor:'#0b0f19', flexDirection:'column', 
    width: '100vw', height:'100vh', alignItems:'center', overflowY: 'scroll'}}>

    <Header />

    <div id="scrollable-div" style={{display:"flex", border: '0px solid white', width:"100%", flexDirection: 'column', alignItems:'center', marginBottom: "30vh", overflow:'auto'}}>
      {console.log(textBoxes)}
      {textBoxes}
    </div>

    <InputBarComponent addUserBox={addUserTextBox}/>
      
    </div>
  );
}

export default ChatPage;
