import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, observable} from 'rxjs'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc, setDoc } from "firebase/firestore"; 
import Swal from 'sweetalert2'



@Injectable({
  providedIn: 'root'
})
export class DbCommandsService {
  subscribe: any;
  customers: [] = []
  customersToShow: [] = [];


  userData = new BehaviorSubject<any>('')
  constructor(private afs:AngularFirestore ) { }
 


  // Add a new document with a generated id.
  async createDocAndUid(obj:any){
    const docRef = await addDoc(collection(this.afs.firestore, "/customers"), obj)
    .then(() =>{
      Swal.fire({
        icon: 'success',
        title : 'User added successfully',
        timer : 2000
      })
      
    }).catch(err => {Swal.fire({
      icon: 'error',
      title: err,
    })})
  }

  
  createDoc(collection :string, doc:string, obj:any) {
    this.afs.collection(collection).doc(doc).set(obj)
    .then((x) => {console.log(x)}).catch((y) => {console.log(y)})
  }

    // Add a new document with a custom id.

  createDocByFullPath(path : string , data : any , merge:boolean){
    this.afs.doc(path).set(data, {merge:merge})
    .then(() =>{
      Swal.fire({
        icon: 'success',
        title : 'User edited successfully',
        timer : 2000
      })
      
    }).catch(err => {Swal.fire({
      icon: 'error',
      title: err,
    })})
  }


  removeCustomerById(customerCollection:string ,id: number) {
    return this.afs.doc(customerCollection+"/"+id).set({status:0},{merge:true})
  }



  async readDoc(path:string) {
    try {
      const data = await this.afs.doc(path).ref.get()
      console.log(data.data());

    }
    catch (err){
      console.error(err)
    }
  }

  getRealTimeData(collection: string){
    this.afs.collection(collection).ref.onSnapshot((document) => {
      let dataarray: any[] = []
      document.forEach((doc)=>{
        let obj:any = doc.data();
        obj.uid = doc.id
        dataarray.push(obj)

      })
      this.userData.next(dataarray)
},
    error => {console.log(error)})
  }



}
