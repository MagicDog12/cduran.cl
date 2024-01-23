import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrl: './achievements.page.scss',
})
export class AchievementsPage implements OnInit {

  public certificates: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.certificates = [
      {
        name: 'Javascript (Coderhouse)',
        description: `Sintaxis y variables, Control de flujos, Ciclos e iteraciones, Funciones, Objetos, Arrays, Funciones de orden superior, DOM, Eventos, Storage & JSON, Operadores avanzados, Librerías, Asincronía y promesas, Ajax & Fetch, Frameworks & NodeJS.`,
        skills: ['Javascript'],
        link: 'https://www.coderhouse.cl/certificados/65a6d0172d5176892829a975',
      },
      {
        name: 'Angular (Udemy)',
        description: 'EN PROGRESO',
        skills: ['Javascript', 'Typescript', 'Angular'],
        link: '',
      },
      {
        name: 'Node.js (Udemy)',
        description: `EN PROGRESO.`,
        skills: ['Javascript', 'Nodejs'],
        link: '',
      }
    ]
  }

}
