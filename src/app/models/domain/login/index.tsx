import { makeAutoObservable } from "mobx";
import Client from "../../../api/client";

export interface Login{
    id :string,
    pass : string,
    name : string,
    status : string;
}

export class LoginModel {
    private state : Login [] = [];
    private client : Client<Login>;
    constructor(){
        makeAutoObservable(this);
        this.client = new Client("Login");
    }
    public getAll(){
        if (process.env.REACT_APP_ENV === "mock") {
            this.state = [{ id: "armzaman", pass: "0812458754", name: "Saharak", status:"Onwer" },
            { id: "romeoarm", pass: "0817972794", name: "Armnaja", status:"Emp" }];
            return;
        }

        this.client.getAll().then(logins => {
            this.state = logins;
        }).catch(err => {
            throw err;
        });
    }
    public get logins(){
        return this.state;
    }
}