import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EnterLACE from './EnterLACE';
import ReenterLACE from './ReenterLACE';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
        <Route index path='/' element={<EnterLACE />}/>
        <Route path="/login" element={<ReenterLACE />} />
        <Route path="/chat-page" element={<App />} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
