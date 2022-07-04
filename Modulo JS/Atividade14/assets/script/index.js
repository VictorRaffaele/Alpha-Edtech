import { doceriaPage } from "./doceria.js";
import { brigadeiroPage } from "./brigadeiro.js";
import { cupcakePage } from "./cupcake.js";
import { docePage } from './doces.js';

const app = document.querySelector("#app");
const pageChange = new CustomEvent('onstatechange', {detail : { pag1: 'index.html', pag2: 'brigadeiros', pag3: 'cupcakes', pag4: 'doces'}});

function setRoutes() {
    
    const imgs = document.querySelectorAll('img');
    const ps = document.querySelectorAll('p');

    imgs[0].onclick = loadBrigadeiro;
    imgs[1].onclick = loadCupcake;
    imgs[2].onclick = loadDoce;

    ps[0].onclick = loadBrigadeiro;
    ps[1].onclick = loadCupcake;
    ps[2].onclick = loadDoce;

    for (let index = 0; index < imgs.length; index++) {

            imgs[index].addEventListener('mouseover',() =>{
            imgs[index].style.cursor = 'pointer';
        });
    }

    for (let index = 0; index < ps.length; index++) {

            ps[index].addEventListener('mouseover',() =>{
            ps[index].style.cursor = 'pointer';
        });
    }
}

function backBt() {
    
    const btBack = document.querySelector('button');
    btBack.addEventListener("click", loadDoceria);

}

function loadDoceria() {
    
    history.pushState({}, 'Doceria', pageChange.detail.pag1);
    app.addEventListener('onstatechange', e =>{console.log(`/${e.detail.pag1}`)});
    app.dispatchEvent(pageChange);
    doceriaPage();
    setRoutes();
    
}

function loadBrigadeiro() {
    
    history.pushState({index : pageChange.detail.pag2}, 'Brigadeiros', pageChange.detail.pag2);
    app.addEventListener('onstatechange', e =>{console.log(`/${e.detail.pag2}`)});
    app.dispatchEvent(pageChange);
    brigadeiroPage();
    backBt();

}

function loadCupcake() {
    
    history.pushState({index : pageChange.detail.pag3}, 'Cupcakes', pageChange.detail.pag3);
    app.addEventListener('onstatechange', e =>{console.log(`/${e.detail.pag3}`)});
    app.dispatchEvent(pageChange);
    cupcakePage();
    backBt();

}

function loadDoce() {
    
    history.pushState({index : pageChange.detail.pag4}, 'Doces', pageChange.detail.pag4);
    app.addEventListener('onstatechange', e =>{console.log(`/${e.detail.pag4}`)});
    app.dispatchEvent(pageChange);
    docePage();
    backBt();

}

loadDoceria();