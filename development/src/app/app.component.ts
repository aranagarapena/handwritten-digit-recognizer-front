import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router){}

  private users: User[] = [];

  ngOnInit(): void {
    console.log('Componente principal AppComponent inicializado');
  }

  navigateToWelcome(): void {
    // Aquí puedes implementar la lógica para navegar a la página de bienvenida
    this.router.navigate(['/welcome']);
  } 

}
