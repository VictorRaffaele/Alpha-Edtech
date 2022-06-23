//Elementos DOM
const btCadastrar = document.querySelector("#btCadastrar");
const btList = document.querySelector("#btList");
const btSearch = document.querySelector("#btSearch");
const nameProd = document.querySelector("#name");
const description = document.querySelector("#description");
const value = document.querySelector("#value");
const tableProducts = document.querySelector("#tableProducts");
const prodList = document.querySelector("#prodList");
const artTable = document.querySelector("#artTable");

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
    
    for (let index = 0; index < produtos.length; index++) {

        if (produtos[index].id == id) {

            //Converte data em timestamp para o formato: dd/mm/aaaa – HH:MM:SS
            let date = new Date(produtos[index].incluidoEm);
            date = date.getDate() + "/" + (date.getMonth()+1) + "/" +date.getFullYear() + "-" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            alert(`ID: ${produtos[index].id} \nNome: ${produtos[index].nome} \nDescrição: ${produtos[index].descricao} \nValor: ${produtos[index].valor} \nIncluido em: ${date}`);

        }   
    }
}

//Edita os produtos existentes com base no id dele
function editProduct(id) {

    for (let index = 0; index < produtos.length; index++) {
        
        if (produtos[index].id == id) {
                
            produtos[index].nome = nameProd.value;
            produtos[index].descricao = description.value;
            produtos[index].valor = value.value;
        }

    }   
    alert(`Produto ${nameProd.value} editado com sucesso!`);
    tableMaker(produtos);
}

//Delata os produtos existentes com base no id dele
function delProduct(id) {

    if (confirm("Deseja deletar o produto do ID " + id)) {

        for (let index = 0; index < produtos.length; index++) {

            if(id == produtos[index].id){
        
                produtos.splice(index, 1);
                tableMaker(produtos);
            
            }
            
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
function tableMaker(dados) {

    tableProducts.innerHTML = "";
    
    const trInfo = tableProducts.insertRow();
    const tdIDs = trInfo.insertCell();
    const tdNames = trInfo.insertCell();
    const tdValues = trInfo.insertCell();
    const tdEdits = trInfo.insertCell();
    const tdDeletes = trInfo.insertCell();

    tdIDs.innerText = "Id";
    tdNames.innerText = "Produto";
    tdValues.innerText = "Valor(R$)";
    tdEdits.innerHTML = "Editar";
    tdDeletes.innerHTML = "Apagar";

    //Definindo classes CSS para os titulos da tabela
    tdIDs.setAttribute("class", "tableTh");
    tdNames.setAttribute("class", "tableTh");
    tdValues.setAttribute("class", "tableTh");

    //Definindo funções para os titulo da tabela
    tdIDs.setAttribute("onclick", `sortID()`);
    tdNames.setAttribute("onclick", `sortName()`);
    tdValues.setAttribute("onclick", `sortValue()`);

    for (let index = 0; index < dados.length; index++) {
        
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
        td_id.innerText = dados[index].id;
        td_name.innerText = dados[index].nome;
        td_value.innerText = dados[index].valor;
        td_edit.appendChild(imgEdit);
        td_delete.appendChild(imgDelete);

        //Definindo funções para itens da tabela
        imgEdit.setAttribute("onclick", `tryEdit(${JSON.stringify(dados[index])})`);
        imgDelete.setAttribute("onclick", `delProduct(${dados[index].id})`);
        td_name.setAttribute("onclick", `readProduct(${dados[index].id})`);
        td_name.setAttribute("class", "tableTh");

    }

    artTable.style.display = "table";

}

//Prepara os campos e o botão para edição de um produto
function tryEdit(dados) {

    editing = dados.id;
    nameProd.value = dados.nome;
    description.value = dados.descricao;
    value.value = dados.valor;
    btCadastrar.innerText = "Editar Produto";

}

//Organiza a tabela pelo ID dos produtos
function sortID() {

    produtos.sort((prod1, prod2) => {

        if(prod1.id > prod2.id){

            return 1;

        } else if(prod1.id < prod2.id){

            return -1;

        } else{
 
            return 0;
 
        }
    });

    tableMaker(produtos);  
    
}

//Organiza a tabela pelo nome dos produtos
function sortName(){

    produtos.sort((prod1, prod2) => {

        if(prod1.nome > prod2.nome){

            return 1;

        } else if(prod1.nome < prod2.nome){

            return -1;

        } else{
 
            return 0;
 
        }
    });

    tableMaker(produtos);  

}

//Organiza a tabela pelo valor dos produtos
function sortValue() {
    
    produtos.sort((prod1, prod2) => {

        if(prod1.valor > prod2.valor){

            return 1;

        } else if(prod1.valor < prod2.valor){

            return -1;

        } else{
 
            return 0;
 
        }
    });

    tableMaker(produtos); 
}

//Filtra a lista de produtos pelo nome e/ou descrição
function searchProduct() {
    
    const search = document.querySelector("#search");
    let auxProd = []; //Array auxiliar

    if (search.value == '') {
        
        tableMaker(produtos);

    } else{

        auxProd = produtos.filter(function(item) {
        
            if (item.nome.includes(search.value) || item.descricao.includes(search.value)) {
                
                return true;
    
            } else{
    
                return false;
    
            }
    
        });
    }

    if (auxProd.length == 0 && search.value != '') {

        alert(`Não foram encontrados produtos conforme chave de pesquisa!`);

    } else if(auxProd.length > 0){

        tableMaker(auxProd);
        alert(`Foram encontrado(s) ${auxProd.length}`);

    }
}

//Adição de eventos nos botões
btCadastrar.addEventListener("click", validProduct);
btList.setAttribute("onclick", `tableMaker(produtos)`);
btSearch.addEventListener("click", searchProduct);