import React, { useState } from 'react';
import {Modal} from './modal';
import {EmailValidator, NameValidator, PasswordValidator} from './validator/validator.js';

export function Form() {
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
    
      function submit(e: any) {
        const resultP: any = document.querySelector('#resultP');
        const email: any = document.querySelector("#input-email");
        const name: any = document.querySelector("#input-name");
        const password: any = document.querySelector("#input-pass");

        e.preventDefault();
        try {
          tryEmail(email.value);
          tryName(name.value);
          tryPass(password.value);
          const usr = 
          {
            'email' : email.value,
            'name' : name.value,
            'pass': password.value
          }
          resultP.innerText = '';
          console.log(usr);
          setModalOpened(true);
        } catch (error: any) {
          resultP.innerHTML = error.message;
        }
      }
    
      return (
        <>
            {modalOpened? <Modal position='fixed' opened={[modalOpened, setModalOpened]}/> : <></>}
            <form onSubmit={submit}>
                <label htmlFor='input-email'>Email:</label>
                <input id='input-email' type='text'></input>
                <label htmlFor='input-name'>Nome:</label>
                <input id='input-name' type='text'></input>
                <label htmlFor='input-pass'>Senha:</label>
                <input id='input-pass' type='password'></input>
                <button>Entrar</button>
                <p id='resultP'></p>
          </form>
        </>
      );
}