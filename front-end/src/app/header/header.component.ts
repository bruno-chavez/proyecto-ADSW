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
  @Input() hasEquipment: boolean;
  @Input() isUser: boolean;
  @Input() isAdmin: boolean;

  constructor(
    private router:Router,
    private headerService: HeaderService
  ) {}

  ngOnInit(){
    this.isAdmin = false;
    this.headerService.getSession().subscribe( data => {
      this.isLogged = data !== null;

      if ((data === null)) {
        this.isUser = false;
        // @ts-ignore
      } else if (data.access === 'admin'){
        this.isUser = false;
        this.isAdmin = true;
      } else {
        this.isUser = true;
      }

    });

    this.hasEquipment = true;
    this.headerService.getEquipment().subscribe(users => {
      this.headerService.getSession().subscribe(session =>{
        if (session !== null) {
          // @ts-ignore
          if (session.access === 'admin') {
            this.hasEquipment = false;
          }
          // @ts-ignore
          for (let i of users) {
            // @ts-ignore
            if (i.email === session.user.email) {
              this.hasEquipment = false;
              }
            }
          }
        })
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.headerService.getSession().subscribe( data => {
      this.isLogged = data !== null;

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
      this.hasEquipment = false;
      this.isUser = false;
      this.isAdmin = false;
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
    this.router.navigate(['/equipment'])
  }

  showCommand(){
    this.router.navigate(['/command'])
  }

  showAdmin(){
    this.router.navigate(['/admin'])

  }
  showCreate(){
    this.router.navigate(['/create'])
  }
}
