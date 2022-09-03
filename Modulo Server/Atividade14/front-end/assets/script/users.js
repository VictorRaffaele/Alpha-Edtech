//Elementos DOM
const btCadastrar = document.querySelector("#btCadastrar");
const btList = document.querySelector("#btList");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const tableUsers = document.querySelector("#tableUsers");
let editing = null; //Salva ID do produto a ser editado

//CRUD
//Adiciona usuarios
function addUser() {

    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/usuarios', {
            method: 'POST', 
            headers: { 
                'Accept': 'application.json',
                'Content-Type':'application/json; charset=UTF-8',
            },
            body: JSON.stringify({name:`${nome.value}`, email:`${email.value}`})
        })
        .then(resp => {
            if (resp.status == 200) {
                alert('Usuario cadastrado com sucesso!');
                return resp.json();
            } else{
                return Promise.reject("[ERROR] Reject user error!");
            }
        })
        .then((value) => {resolve(value)})
        .catch(err => reject(err));
    });
}

//Le os usuarios cadastrados na api
function readUsers() {
    
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/usuarios', {
            method: 'GET', 
        })
        .then(resp => {
            if (resp.status == 200) {
                return resp.json();
            } else{
                return Promise.reject("[ERROR] Reject user error!");
            }
        })
        .then((value) => {resolve(value)})
        .catch(err => reject(err));
    });
}

//Edita os produtos existentes com base no id dele
function editProduct(id) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/usuarios/${id}`, {
            method: 'PUT', 
            headers: { 
                'Accept': 'application.json',
                'Content-Type':'application/json; charset=UTF-8',
            },
            body: JSON.stringify({name:`${nome.value}`, email:`${email.value}`})
        })
        .then(resp => {
            if (resp.status == 200) {
                alert(`Usuario editado com sucesso!`);
                tableMaker();
                return resp.json();
            } else{
                return Promise.reject("[ERROR] Reject user error!");
            }
        })
        .then((value) => {resolve(value)})
        .catch(err => reject(err));
    });
}

//Delata os produtos existentes com base no id dele
function delProduct(id) {

    if (confirm("Deseja deletar o produto do ID " + id)) {

        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8080/usuarios/${id}`, {
                method: 'DELETE', 
            })
            .then(resp => {
                if (resp.status == 200) {
                    alert("Deletado!");
                    tableMaker();
                    return resp.json();
                } else{
                    return Promise.reject("[ERROR] Reject user error!");
                }
            })
            .then((value) => {resolve(value)})
            .catch(err => reject(err));
        });
    }
}

//Funções Auxiliares
//Valida as entradas e a operação a ser realizada
async function valid() {

    try {
        if (nome.value == "") {
            throw new Error("Usuario sem nome!");
        } else if(email.value == ""){
            throw new Error("Usuario sem email!");
        } else{
            if (btCadastrar.innerText == "Cadastrar") {
                const add = await addUser();
                add;
                cleanEntry();
            } else{
                const edit = await editProduct(editing);
                edit;
                cleanEntry();
                btCadastrar.innerText = "Cadastrar";
            }
        }
    } catch (error) {
       alert(`Falha no cadastro do usuario! \n${error.message}`);
       cleanEntry();
    }   
}

//Limpa os campos de entrada
function cleanEntry() {
 
    nome.value = '';
    email.value = '';

}

//Monta a tabela com os usuarios
async function tableMaker() {
 
    const list = await readUsers()
    let cont = 0;

    tableUsers.innerHTML = "<tr><th>Id</th> <th>Nome</th> <th>Email</th> <th>Editar</th> <th>Apagar</th></tr>";
    
    while (list.length > cont) {
        
        if (list[cont] != null) {
            //Monta estrutura da tabela
            const tr = tableUsers.insertRow();
            const td_id = tr.insertCell();
            const td_name = tr.insertCell();
            const td_email = tr.insertCell();
            const td_edit = tr.insertCell();
            const td_delete = tr.insertCell();
    
            const imgEdit = document.createElement('img');
            imgEdit.src = "./assets/imagens/edit.svg";
        
            const imgDelete = document.createElement('img');
            imgDelete.src = "./assets/imagens/trash.svg";
    
            //Passa para tabela os dados do array
            td_id.innerText = list[cont].id;
            td_name.innerText = list[cont].name;
            td_email.innerText = list[cont].email;
            td_edit.appendChild(imgEdit);
            td_delete.appendChild(imgDelete);

            //Definindo funções para itens da tabela
            imgEdit.setAttribute("onclick", `tryEdit(${JSON.stringify(list[cont])})`);
            imgDelete.setAttribute("onclick", `delProduct(${list[cont].id})`);
        }
        cont++;
    }
    tableUsers.style.display = "table";
}

//Prepara os campos e o botão para edição de um usuario
function tryEdit(dados) {

    editing = dados.id;
    nome.value = dados.name;
    email.value = dados.email;
    btCadastrar.innerText = "Editar Usuario";

}

//Adição de eventos nos botões
btCadastrar.addEventListener("click", valid);
btList.addEventListener("click", tableMaker);