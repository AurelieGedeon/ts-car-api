import { initializeApp, getApps, cert } from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"

import credentials from "../credentials"

export const connectDb = () => {
    if(!getApps.length){
    initializeApp({
        credential: cert(credentials as ServiceAccount)
    })
    }

}