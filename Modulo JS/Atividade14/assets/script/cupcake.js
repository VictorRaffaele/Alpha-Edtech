export function cupcakePage() {
    const app = document.querySelector("#app");
    
    app.innerHTML = '<h1> Cupcakes </h1>'
                    +'<article><img src="./assets/images/cupcakeMorango.webp"/><p>Cupcake com Morango</p></article>'
                    +'<article><img src="./assets/images/cupcakeBrigadeiro.webp"/><p>Cupcake com Brigadeiro</p></article>'
                    +'<article><img src="./assets/images/cupcakeOreo.webp"/><p>Cupcake com Oreo</p></article>'
                    +'<button type="button">Voltar!</button>'
    ;
}