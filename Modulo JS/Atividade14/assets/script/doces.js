export function docePage() {
    const app = document.querySelector("#app");
    
    app.innerHTML = '<h1> Doces </h1>'
                    +'<article><img src="./assets/images/macarons.webp"/><p>Macarons</p></article>'
                    +'<article><img src="./assets/images/copoDoce.webp"/><p>Copo Doce</p></article>'
                    +'<article><img src="./assets/images/barraTrufada.webp"/><p>Barra Trufada</p></article>'
                    +'<button type="button">Voltar!</button>'
    ;
}