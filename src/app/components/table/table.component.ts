import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DbCommandsService } from 'src/app/services/db-commands.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit  {


  
  constructor(private userService:UserService,public dbCommands: DbCommandsService) { 

  
  }

  i :number = 0
  subscribe: any
  customers : [] =[]
  customersToShow = []


  ngOnInit(): void {
    this.dbCommands.getRealTimeData('customers');
    this.subscribe = this.dbCommands.userData.subscribe(data => {
      this.customers = data;
      this.search("");
     })

  }


  // getUidArray(customers:[]){
  //   let uidArray = [];
  //   const customersArray = this.dbCommands.userData.getValue()
  //   console.log(customersArray)
  //   for (let x in customersArray){
  //     uidArray.push(x['uid'])
  //   }

  // }

  removeCustomer(x:number){
    const customersArray = this.dbCommands.userData.getValue()
    console.log(customersArray)
    let showCustomer = customersArray[x];
    console.log(showCustomer)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Customer has been deleted.',
          'success'
        )
        showCustomer.status = 0
        console.log(showCustomer.uid)
        this.dbCommands.removeCustomerById('customers' , showCustomer.uid)
      }
    })
  }

  search(value: string) {
    value = value.toLowerCase();
    this.customersToShow = this.customers.filter((c:any) => c.fname.toLowerCase().includes(value) || 
    c.lname.toLowerCase().includes(value) ||
    c.email.toLowerCase().includes(value) ||
    c.phone.toLowerCase().includes(value) )
    // console.log(this.customersToShow)
  }


  





}
