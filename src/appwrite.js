import { Client, Databases, Storage,Account } from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('679df87b0037b4758c32');

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);


const DB = "67c2093d000b3dff9c47"
const PARCEL= "67c20992002c7a12eb50"

export { databases, storage,account, DB, PARCEL };
export { ID } from 'appwrite';