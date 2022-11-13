import { Component, OnInit } from '@angular/core';
import { DbCommandsService } from 'src/app/services/db-commands.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private dbCommands:DbCommandsService) { }

  // fname:string=''
  // lname:string=''
  // email:string=''
  // phone:string=''


  ngOnInit(): void {
  }

  buildAndSaveObj(fname:string, lname:string, email:string, phone:string){
    let obj = {
      'status' : 1,
      'fname' : fname,
      'lname' : lname,
      'email' : email,
      'phone' : phone
    }
    this.addUserWithUid(obj)

  }

  addUser(path:string , obj:any ){
    this.dbCommands.createDocByFullPath(path , obj , true)
  }

  addUserWithUid(obj:any){
    this.dbCommands.createDocAndUid(obj)
  }
}
