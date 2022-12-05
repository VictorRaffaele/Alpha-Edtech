import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const user = {
  firstName: 'Victor A Raffaele',
  birth: new Date("1999","02"-1,"18"),
};

function formatName(user) {
  return user.firstName;
}

function formatYear(user) {
  return Math.floor((Date.now() - user.birth.getTime())/1000/3600/24/365);
}
  
const element = (
    <h1>
      Olá, meu nome é {formatName(user)}, tenho {formatYear(user)} anos  e este é meu primeiro contato com JSX.
    </h1>
);
ReactDOM.render(
    element,
    document.getElementById('root')
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
