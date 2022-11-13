import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbCommandsService } from 'src/app/services/db-commands.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  
    
   ngOnInit() {

  }
  


  constructor(private userService:UserService , private route: ActivatedRoute, private dbCommands: DbCommandsService) {

   }

  logout(){
    this.userService.logout()
  }


 




}
