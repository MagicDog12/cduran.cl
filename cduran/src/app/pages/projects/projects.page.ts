import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss',
})
export class ProjectsPage implements OnInit {

  public projects: any;
  public githubLogo2: string = "../../assets/img/github-mark.svg";

  constructor(
  ) { }

  ngOnInit(): void {
    this.projects = [
      {
        nombre: 'Portafolio',
        descripcion: `Página principal dónde se realiza un acercamiento a mi personalidad, mis proyectos y mis estudios.`,
        state: 'Finalizado',
        skills: ['Javascript', 'Typescript', 'Angular', 'Nginx'],
        link: 'https://cduran.cl',
        repo: 'https://github.com/MagicDog12/cduran.cl'
      },
      {
        nombre: 'Fit Partner',
        descripcion: `Red social para subir entrenamientos del gimnasio.`,
        state: 'En progreso',
        skills: ['Javascript', 'Typescript', 'Angular', 'NodeJS', 'Express', 'Sequelize', 'PostgreSQL'],
        link: 'https://magicdog12.github.io/FitPartner',
        repo: 'https://github.com/MagicDog12/FitPartner'
      },
      {
        nombre: 'Black Jack',
        descripcion: `Simulador del juego Black Jack para Coderhouse.`,
        state: 'Finalizado',
        skills: ['Javascript'],
        link: 'https://blackjack.cduran.cl',
        repo: 'https://github.com/MagicDog12/BlackJack'
      },
      {
        nombre: 'Famous Map',
        descripcion: `Mapa interactivo para buscar famosos alrededor del mundo.`,
        state: 'En progreso',
        skills: ['Javascript', 'Typescript', 'Angular', 'MapBox'],
        link: 'https://famous-map.cduran.cl',
        repo: 'https://github.com/MagicDog12/famous-map'
      },
    ]
  }

}
