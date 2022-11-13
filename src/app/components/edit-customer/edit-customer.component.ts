import { Component, OnInit } from '@angular/core';
import { DbCommandsService } from 'src/app/services/db-commands.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor( private dbCommands: DbCommandsService, private _Activatedroute:ActivatedRoute ) { }

  fname:string = '';
  lname:string = '';
  email:string = '';
  phone:string = '';
  uid:any = '';
  subscribe:any;
  customers:[]=[]



  showDetails(x:any, customersArray:any){
    let showCustomer = customersArray[x]
    console.log(showCustomer)
    this.fname = showCustomer.fname;
    this.lname = showCustomer.lname
    this.email = showCustomer.email
    this.phone = showCustomer.phone

  }

  getParam(){

    this._Activatedroute.paramMap.subscribe((a)=>{
      let parameter = a.get('id')
      this.uid = a.get('uid')
      this.showDetails(parameter, this.customers)
    })
  }


  saveEdit(){
    this.dbCommands.createDocByFullPath(
      `/customers/${this.uid}`,
      {
        'fname': this.fname,
        'lname': this.lname,
        'email': this.email,
        'phone': this.phone
      } ,
      true
      )
  }


  async ngOnInit() {
    this.dbCommands.getRealTimeData('customers');
    this.subscribe = await this.dbCommands.userData.subscribe(data => {
      this.customers = data;
      console.log(this.customers)
      this.getParam()
     })
  }

}
