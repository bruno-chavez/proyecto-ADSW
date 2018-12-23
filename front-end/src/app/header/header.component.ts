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
  @Input() isMod: boolean;
  @Input() isUser: boolean;

  constructor(
    private router:Router,
    private headerService: HeaderService
  ) {}

  ngOnInit(){
    this.headerService.getSession().subscribe( data => {
    this.isLogged = data !== null;
    // @ts-ignore
    if ((data === null) || (data.access === 'admin') || (data.access === 'user')) {
      this.isMod = false;
    } else {
      this.isMod = true;
    }
    // @ts-ignore
    if ((data === null) || (data.access === 'admin')) {
        this.isUser = false;
      } else {
        this.isUser = true;
      }
    })}

  ngOnChanges(changes: SimpleChanges) {
    this.headerService.getSession().subscribe( data => {
      this.isLogged = data !== null;

      // @ts-ignore
      if ((data === null) || (data.access === 'admin') || (data.access === 'user')) {
        this.isMod = false;
      } else {
        this.isMod = true;
      }

      // @ts-ignore
      if ((data === null) || (data.access === 'admin')) {
        this.isUser = false;
      } else {
        this.isUser = true;
      }
    })
  }

  logout(){
    this.headerService.logout().subscribe( () => {
      this.router.navigate(['/']);
      this.isLogged = false;
      this.isMod = false;
      this.isUser = false;
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

  showEquipment(){
    this.router.navigate(['/create-equipment'])
  }

  showCommand(){
    this.router.navigate(['/command'])
  }
}
