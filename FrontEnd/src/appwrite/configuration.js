import config from "../config/config";
import {Client, ID, Account, Databases, Storage, Query} from "appwrite";

class Configuration{
     client = new Client()
     account
     databases
     bucket

     
     constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

     }

     async createPost({title,slug,content,featuredImage,status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (error) {
            console.log("Error occured while createPost", error);
            return null;
        }
     }

     async updatePost(slug,{title,content,featuredImage,status}){
        try {
           return await this.databases.updateDocument(
                config.appwriteDatabaseId, // databaseId
                config.appwriteCollectionId, // collectionId
                slug, // documentId
                {
                    title, content, featuredImage, status
                }, // data (optional)
            );
        } catch (error) {
            console.log("Error occured while updatePost", error);
            return null;
        }
     }

     async getPost(slug){
        try {
            
           return await this.databases.getDocument(
                config.appwriteDatabaseId, // databaseId
                config.appwriteCollectionId, // collectionId
                slug, // documentId
            );
        } catch (error) {
            console.log("Error occured while getPost", error);
            return null;
        }
     }

     async getPosts(queries=[Query.equal("status","active")]){
        try {
           return await this.databases.listDocuments(
                config.appwriteDatabaseId, // databaseId
                config.appwriteCollectionId, // collectionId
                queries
            );
        } catch (error) {
            console.log("Error occured while getPosts", error);
            return null;
        }
     }

     async deletePost(documentId){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId, // databaseId
                config.appwriteCollectionId, // collectionId
                documentId, // documentId
            );
        } catch (error) {
            console.log("Error occured while deletePost",error);
            return null;
        }
     }


     // FIle Upload

     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId, // bucketId
                ID.unique(), // fileId
                file,
            );
        } catch (error) {
            console.log("Error occured while uploadFile",error);
            return null;
        }
     }

     async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            );
        } catch (error) {
            console.log("Error occured while deleteFile",error);
            return null;
        }
     }

      getFilePreview(fileId){
        try {
            return  this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId,
            );
        } catch (error) {
            console.log("Error occured while getFilePreview",error);
            return null;
        }

     }

}

const configuration = new Configuration();

export default configuration;