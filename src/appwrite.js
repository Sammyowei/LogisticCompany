import { Client, Databases, Storage,Account } from "appwrite";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('679c702e0013cb9894d4');

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);


const DB = "679c755f002844bbc22a"
const PARCEL= "679c757e0008180c12e1"

export { databases, storage,account, DB, PARCEL };
export { ID } from 'appwrite';