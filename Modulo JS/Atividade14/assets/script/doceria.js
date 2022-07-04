export function doceriaPage() {
    const app = document.querySelector("#app");

    app.innerHTML = '<h1> O que você gostaria de comprar? </h1>'
                    +'<article><img src="./assets/images/brigadeiro.webp"/><p>Brigadeiro</p></article>'
                    +'<article><img src="./assets/images/cupcake.webp"/><p>Cupcake</p></article>'
                    +'<article><img src="./assets/images/doces.webp"/><p>Doces</p></article>'
    ;
}