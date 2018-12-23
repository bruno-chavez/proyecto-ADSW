import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import { HeaderService } from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() isLogged: boolean;

  constructor(
    private router:Router,
    private headerService: HeaderService
  ) {}

  ngOnInit(){
    this.headerService.getSession().subscribe( data => {
    this.isLogged = data !== null;
  })}

  ngOnChanges(changes: SimpleChanges) {
    this.headerService.getSession().subscribe( data => {
      this.isLogged = data !== null;
    })
  }

  logout(){
    this.headerService.logout().subscribe( () => {
      this.router.navigate(['/']);
      this.isLogged = false;
    })
  }
  showRegister(){
    this.router.navigate(['/register'])
  }

  showLogin(){
    this.router.navigate(['/']  )
  }

  showAdminLogin(){
    this.router.navigate(['/adminlogin'])
  }
}
