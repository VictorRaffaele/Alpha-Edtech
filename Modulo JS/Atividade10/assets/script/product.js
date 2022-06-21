//Elementos DOM
const btCadastrar = document.querySelector("#btCadastrar");
const btList = document.querySelector("#btList");
const nameProd = document.querySelector("#name");
const description = document.querySelector("#description");
const value = document.querySelector("#value");
const tableProducts = document.querySelector("#tableProducts");

let produtos = []; //Array de produtos

//Variaveis auxiliares
let createID = 0; //Guarda o id utilizado pelo proximo produto 
let editing = null; //Salva ID do produto a ser editado

//Função criadora dos objetos
function createProduct(nameProd, descrip, value) {

    const produto = new Object();
    produto.id = createID;
    produto.nome = nameProd;
    produto.descricao = descrip;
    produto.valor = value;
    produto.incluidoEm = Date.now();

    return produto;
    
}

//CRUD
//Adiciona produtos no array
function addProduct() {

    produtos.push(createProduct(nameProd.value, description.value, parseFloat(value.value)));
    alert(`Produto ${nameProd.value} incluído com sucesso!`);
    createID++;
 
}

//Le os produtos no array e gera um alerta com os dados
function readProduct(id) {
    
    let cont = 0;
    while (produtos.length > cont) {

        if (produtos[cont] != null) {
            
            if (produtos[cont].id == id) {

                //Converte data em timestamp para o formato: dd/mm/aaaa – HH:MM:SS
                let date = new Date(produtos[cont].incluidoEm);
                date = date.getDate() + "/" + (date.getMonth()+1) + "/" +date.getFullYear() + "-" + date.getHours() + ":" +date.getMinutes() + ":" + date.getSeconds();

                alert(`ID: ${produtos[cont].id} \nNome: ${produtos[cont].nome} \nDescrição: ${produtos[cont].descricao} \nValor: ${produtos[cont].valor} \nIncluido em: ${date}`);

            }
        }
        cont++;
    }

}

//Edita os produtos existentes com base no id dele
function editProduct(id) {

    let cont = 0;
    while (produtos.length > cont) {

        if (produtos[cont] != null) {
            
            if (produtos[cont].id == id) {
                
                produtos[cont].nome = nameProd.value;
                produtos[cont].descricao = description.value;
                produtos[cont].valor = value.value;
            }
        }
        cont++;
    }
    alert(`Produto ${nameProd.value} editado com sucesso!`);
    tableMaker();
}

//Delata os produtos existentes com base no id dele
function delProduct(id) {

    if (confirm("Deseja deletar o produto do ID " + id)) {

        let cont = 0;
    
        while (produtos.length > cont) {
            
            if(produtos[cont] != null && id == produtos[cont].id){
        
                produtos[cont] = null;
                tableMaker();
            
            }
            
            cont++;

        }
        alert("Deletado!");
    }
}

//Funções Auxiliares
//Valida as entradas e a operação a ser realizada
function validProduct() {

    try {

        if (nameProd.value == "") {
         
            throw new Error("Produto sem nome!");
 
        } else if(description.value == ""){
 
            throw new Error("Produto sem descrição!");
 
        } else if(value.value == ""){
 
            throw new Error("Produto sem valor!");
 
        } else if (isNaN(parseFloat(value.value))) {
         
            throw new Error("Valor não é um numero!");
         
        } else{
         
            if (btCadastrar.innerText == "Incluir Produto") {

                addProduct();
                cleanEntry();

            } else{

                editProduct(editing);
                cleanEntry();
                btCadastrar.innerText = "Incluir Produto";

            }
         
        }
 
    } catch (error) {
 
       alert(`Falha no cadastro do produto! \n${error.message}`);
     
    }   
    
}

//Limpa os campos de entrada
function cleanEntry() {
 
    nameProd.value = '';
    description.value = '';
    value.value = '';

}

//Percorre o array e monta a tabela com os produtos
function tableMaker() {
    
    tableProducts.innerHTML = "<th>Id</th> <th>Produto</th> <th>Valor(R$)</th> <th>Editar</th> <th>Apagar</th>";
    
    let cont = 0;

    while (produtos.length > cont) {
        
        if (produtos[cont] != null) {
            //Monta estrutura da tabela
            const tr = tableProducts.insertRow();
            const td_id = tr.insertCell();
            const td_name = tr.insertCell();
            const td_value = tr.insertCell();
            const td_edit = tr.insertCell();
            const td_delete = tr.insertCell();
    
            const imgEdit = document.createElement('img');
            imgEdit.src = "./assets/imagens/edit.svg";
        
            const imgDelete = document.createElement('img');
            imgDelete.src = "./assets/imagens/trash.svg";
    
            //Passa para tabela os dados do array
            td_id.innerText = produtos[cont].id;
            td_name.innerText = produtos[cont].nome;
            td_value.innerText = produtos[cont].valor;
            td_edit.appendChild(imgEdit);
            td_delete.appendChild(imgDelete);

            //Definindo funções para itens da tabela
            imgEdit.setAttribute("onclick", `tryEdit(${JSON.stringify(produtos[cont])})`);
            imgDelete.setAttribute("onclick", `delProduct(${produtos[cont].id})`);
            td_name.setAttribute("onclick", `readProduct(${produtos[cont].id})`);
        }

        cont++;
    }

    tableProducts.style.display = "table";
}

//Prepara os campos e o botão para edição de um produto
function tryEdit(dados) {

    editing = dados.id;
    nameProd.value = dados.nome;
    description.value = dados.descricao;
    value.value = dados.valor;
    btCadastrar.innerText = "Editar Produto";

}

//Adição de eventos nos botões
btCadastrar.addEventListener("click", validProduct);
btList.addEventListener("click", tableMaker);