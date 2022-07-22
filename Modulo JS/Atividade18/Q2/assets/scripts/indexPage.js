const main = document.querySelector('main');

export function buttonShow() {

    const btShow = document.createElement('button');
    const art = document.createElement('article');
    btShow.textContent = 'Sortear Cartas!';
    btShow.id = 'btShow';
    art.appendChild(btShow)
    main.appendChild(art);

}

export function createImgArt() {
    
    const imgArt = document.createElement('article');
    imgArt.id = 'imgArt';
    main.appendChild(imgArt);

}

export function clearImgArt() {
    
    const imgArt = document.querySelector("#imgArt");
    imgArt.innerHTML = '';
    
}

export function showCards(entry) {

    const img = document.createElement('img');
    const art = document.querySelector('#imgArt');
    img.src = `${entry}`;
    art.appendChild(img);

}