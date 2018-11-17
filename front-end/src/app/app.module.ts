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
import { CommandService} from "./command.service";

const routes: Routes=[
  {path: '', component: LoginFormComponent},
  {path:'user', component:UserComponent}
  //{path: 'register',component: RegisterComponent}

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
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommandService],
  bootstrap: [AppComponent]
})

export class AppModule { }
