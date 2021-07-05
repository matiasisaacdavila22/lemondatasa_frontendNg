import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/persona';
import { ServiceService } from 'src/app/Servicio/service.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas!:Persona[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
      this.service.getPersonas().subscribe(
        data =>{
          this.personas = data;
        },
        error => {
            console.log('error de conection')
        }
      )
  }

}
