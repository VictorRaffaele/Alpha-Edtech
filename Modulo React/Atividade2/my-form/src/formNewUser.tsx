import React, { useState } from 'react';
import {EmailValidator, NameValidator, PasswordValidator} from './validator/validator.js';
import { FormLogin } from './formLogin';

export function FormUser() {
    let [modalOpened, setModalOpened] = useState<boolean>(false);
    function tryEmail(email: any){
      try {
        new EmailValidator(email);
      }
      catch (error: any) {
        throw new Error('Email: ' + error.message);
      }
    }
    
    function tryName(name: any) {
      try {
        new NameValidator(name);
      }
      catch (error: any) {
        throw new Error('Name: ' + error.message);
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
        const name: any = document.querySelector("#input-name");
        const password: any = document.querySelector("#input-pass");
        e.preventDefault();
        try {
          tryEmail(email.value);
          tryName(name.value);
          tryPass(password.value);
          const usr = {
            "email" : email.value,
            "name" : name.value,
            "password": password.value
          };
          console.log(JSON.stringify(usr));
          const result = await fetch('http://localhost:8000/accounts/', {
            method: 'POST',  
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
          setModalOpened(true);
        } catch (error: any) {
          resultP.innerHTML = error.message;
        }
      }

      return (
        <>
          <header className="App-header">
            <h1>New User</h1>
            <nav>
              <ul>
                <li>Login</li>
              </ul>
            </nav>p
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
        </>
      );
}