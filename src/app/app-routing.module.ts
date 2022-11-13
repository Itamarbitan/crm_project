import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { IfUserLogin } from './services/userAuth.service';
import { TableComponent } from './components/table/table.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';



const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent , canActivate : [IfUserLogin],
   children: [
    {path: '' , component : TableComponent},
    {path: 'addUser' , component : AddUserComponent},
    {path: 'editCustomer/:id/:uid' , component : EditCustomerComponent},
   ]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
