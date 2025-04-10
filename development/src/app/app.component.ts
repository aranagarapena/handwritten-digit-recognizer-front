import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient){}

  private users: User[] = [];

  ngOnInit(): void {
    console.log('Componente principal AppComponent inicializado');
  }

}
