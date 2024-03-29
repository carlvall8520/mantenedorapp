import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth :AuthService,private router : Router) { }

  ngOnInit(): void {
    
  }
   
  _deslogearUsuario(){
    this.auth.deslogear();
    this.router.navigate(['login']);
  }

}
