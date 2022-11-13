import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService , private route: Router){
  }
  password:string='';
  email:string='';

  
  

  ngOnInit(): void {
    this.userService.isLoggedIn().then((res)=> {if (res === true) {
      console.log('fuck')
      this.route.navigate(['/dashboard'])
    }})

  }

  emailKey(emailValue:string){
    this.email = emailValue
  }
  passwordKey(passwordValue:string){
    this.password = passwordValue
  }

  login(){
    this.userService.login(this.email, this.password)
    .then(() =>{
      Swal.fire({
        icon: 'success',
        title : 'login complete'
      })
    }).catch(err => {Swal.fire({
      icon: 'error',
      title: err,
    })})
  }
  

}
