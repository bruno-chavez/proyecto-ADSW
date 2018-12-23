import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HistorialComponent } from './historial/historial.component';
import { ComandoComponent } from './command/comando.component';
import { UserComponent } from './user/user.component';
import { CommandService} from "./command/command.service";
import { RegisterService} from "./register/register.service";
import { LoginService } from "./login-form/login.service";
import { AdminComponent } from './admin/admin.component';
import { AdminService} from "./admin/admin.service";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminLoginService } from "./admin-login/admin-login.service";
import {EquipmentComponent} from "./equipment/equipment.component";

const routes: Routes=[
  {path: '', component: LoginFormComponent},
  {path:'user', component:UserComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'equipment', component:EquipmentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    RegisterComponent,
    HistorialComponent,
    ComandoComponent,
    UserComponent,
    AdminComponent,
    AdminLoginComponent,
    EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CommandService,
    RegisterService,
    LoginService,
    AdminService,
    AdminLoginService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
