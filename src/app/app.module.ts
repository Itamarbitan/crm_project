import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { UserService } from './services/user.service';
import {IfUserLogin} from './services/userAuth.service';
import { TableComponent } from './components/table/table.component'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DbCommandsService } from './services/db-commands.service';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    AddUserComponent,
    EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [UserService, IfUserLogin, DbCommandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
