import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnInit {
  @ViewChild('pcPixelArt', { static: true }) pcPixelArt!: ElementRef;

  public pcImage: string = "../../assets/img/pcPixelArt.png";
  public profileImage: string = "../../assets/img/profile.jpeg";
  public linkedinLogo: string = "../../assets/img/linkedinLogo.png";
  public githubLogo: string = "../../assets/img/githubLogo.png";
  public cvLogo: string = "../../assets/img/curriculum-Icon.png";
  public freecodecampLogo: string = "../../assets/img/freeCodeCamp-Icon.png";

  public animacionIniciada: boolean = false;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.renderer.listen('document', 'mousemove', (evento: MouseEvent) => {
      const x = evento.clientX;
      const y = evento.clientY;

      const contenedorRect = this.pcPixelArt.nativeElement.getBoundingClientRect();
      const xRelativo = x - contenedorRect.left;
      const yRelativo = y - contenedorRect.top;

      const xMov = (xRelativo - contenedorRect.width / 2) / 60;
      const yMov = (yRelativo - contenedorRect.height / 2) / 60;

      if (!this.animacionIniciada) {
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'transform', 'translate(0px, 0px)');
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'animation', 'movimientoInicial 1s ease 1');
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'animationDelay', '0.5s');
        this.animacionIniciada = true;
      } else {
        this.renderer.setStyle(this.pcPixelArt.nativeElement, 'transform', `translate(${xMov}px, ${yMov}px)`);
      }
    });
  }

}
