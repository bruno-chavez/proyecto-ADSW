import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule , Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HistorialComponent } from './historial/historial.component';
import { ComandoComponent } from './command/comando.component';
import { UserComponent } from './user/user.component';
import { CommandService} from "./command/command.service";
import { RegisterService} from "./register/register.service";
import { LoginService } from "./login-form/login.service";
import { AdminComponent } from './admin/admin.component';
import { AdminService} from "./admin/admin.service";

const routes: Routes=[
  {path: '', component: LoginFormComponent},
  {path:'user', component:UserComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'admin', component: AdminComponent}

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
    AdminComponent
    
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
    AdminService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
