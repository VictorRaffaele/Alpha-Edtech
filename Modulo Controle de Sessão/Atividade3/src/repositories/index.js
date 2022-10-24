import { Insert } from "./insert.js";
import { List } from "./list.js";
import { Update } from "./update.js";
import { Delete } from "./delete.js";
import { Login } from "./login.js";

export class Index{
    insert = new Insert();
    list = new List();
    update = new Update();
    del = new Delete();
    login = new Login();
}