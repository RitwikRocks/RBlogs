import config from '../config/config.js'
import { Client, Account, ID } from "appwrite";

console.log(config.appwriteUrl);
export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            console.log(config.appwriteUrl);
            console.log(`Create Account : ${email}, ${password}, ${name}`)
         const userAccount = await this.account.create(ID.unique(), email, password,name);
         if(userAccount){
            // login
            this.login({email,password});
         }else{
            return userAccount;
         }
        } catch (error) {
            console.log("Error Occured while createAccount ",error);
        }
    }

    async login({email, password}){
        try {
            console.log(config.appwriteUrl);
          return  await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            console.log("Error Occured while login ",error);
        }
    }

    async logout(){
        try {
         return await this.account.deleteSessions();   
        } catch (error) {
            console.log("Error Occured while logout ",error);
        }
    }

    async getCurrentUser(){
        try {
            return  await this.account.get();
        } catch (error) {
            console.log("Error Occured while getCurrentUser ",error);
        
        }
        return null;
    }

    

}

const authService = new AuthService();

export default authService;