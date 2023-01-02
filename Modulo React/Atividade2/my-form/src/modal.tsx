import React from "react";
import {EmailValidator, PasswordValidator} from './validator/validator.js';

export function Modal (props: any){
    
    const background = {
        width : '100%',
        height : '100%',
        zIndex : '5',
        backgroundColor : 'rgba(0,0,0,.8)',
        position : props.position,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    }

    const divInfo = {
        width : '50%',
        height : '65%',
        backgroundColor : 'gray',
        boxShadow : '2px 2px 2px black'
    }

    const topBar = {
        width : '100%',
        backgroundColor : 'lightGray',
        display : 'flex',
        justifyContent : 'flex-end'
    }

    function tryEmail(email: any){
        try {
          new EmailValidator(email);
        }
        catch (error: any) {
          throw new Error('Email: ' + error.message);
        }
      }
      
      function tryPass(pass: any) {
        try {
          new PasswordValidator(pass);
        }
        catch (error: any) {
          throw new Error('Senha: ' + error.message);
        }
      }

    async function submit(e: any) {
        const resultP: any = document.querySelector('#resultP');
        const email: any = document.querySelector("#input-email");
        const password: any = document.querySelector("#input-pass");
        e.preventDefault();
        try {
          tryEmail(email.value);
          tryPass(password.value);
          const usr = {
            "email" : email.value,
            "password": password.value
          };
          console.log(JSON.stringify(usr));
          const result = await fetch('http://localhost:8000/accounts/', {
            method: 'PATCH',  
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Access-Control-Allow-Credentials': 'true',
            },
            mode: 'no-cors',
            body: JSON.stringify(usr),
          }).then((resp) => {
            if (!resp.ok) {
              throw new Error("Error on response");
            }
            return resp.json();
          });
          resultP.innerText = '';
        } catch (error: any) {
          resultP.innerHTML = error.message;
        }
      }

    if (!props) {
        return <></>;
    } else{
        return (
        <div style={background} onClick={() =>{props.opened[1](false)}}>
            <div style={divInfo} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <div style={topBar}>
                    <button onClick={() =>{props.opened[1](false)}}>X</button>
                </div>
                <header className="App-header">
                    <h1>User Update</h1>
                </header>
                <form onSubmit={submit}>
                <label htmlFor='input-email'>Email:</label>
                <input id='input-email' type='text'></input>
                <label htmlFor='input-name'>Name:</label>
                <input id='input-name' type='text'></input>
                <label htmlFor='input-pass'>Password:</label>
                <input id='input-pass' type='password'></input>
                <button>Login</button>
                <p id='resultP'></p>
            </form>
            </div>
        </div>
        );    
    }
}