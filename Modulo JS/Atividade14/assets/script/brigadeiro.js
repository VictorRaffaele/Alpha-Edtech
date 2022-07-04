export function brigadeiroPage() {
    const app = document.querySelector("#app");
    
    app.innerHTML = '<h1> Brigadeiros </h1>'
                    +'<article><img src="./assets/images/brigadeiroTrad.webp"/><p>Brigadeiro Tradicional</p></article>'
                    +'<article><img src="./assets/images/brigadeiroRosa.webp"/><p>Brigadeiro Rosa</p></article>'
                    +'<article><img src="./assets/images/brigadeiroPaçoca.webp"/><p>Brigadeiro de Paçoca</p></article>'
                    +'<button type="button">Voltar!</button>'
    ;
}