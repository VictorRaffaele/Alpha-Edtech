import fs from "fs";
const path = "./database/dados.json";
let userList = [];

function loadData(){
    if(!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }
    const fileText = fs.readFileSync(path);
    userList = JSON.parse(fileText);
}

export function list(){
    return userList;
}

export function addUser(data){
    
    if (userList.length == 0) {
        data.id = userList.length;
    } else{
        data.id = userList[userList.length-1].id + 1;
    }
    
    JSON.stringify(data)
    userList.push(data);
    fs.writeFile(path, JSON.stringify(userList), () => {
        console.log("Usuario adicionado!");
    });
}

export function editUser(_id, data){
    console.log(_id)
    for (let index = 0; index < userList.length; index++) {
        if(_id == userList[index].id){
            userList[index].name = data.name;
            userList[index].email = data.email;
        } 
    }
    fs.writeFile(path, JSON.stringify(userList), () => {
        console.log("Usuario Editado!");
    });  
}

export function delUser(id){

    userList = userList.filter(item => item.id != id);
    fs.writeFile(path, JSON.stringify(userList), () => {
        console.log("Usuario Deletado!");
    });

}

loadData ();