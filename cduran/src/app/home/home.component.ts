import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent implements OnInit {
  @ViewChild('pcPixelArt', { static: true }) pcPixelArt!: ElementRef;

  public pcImage: string = "../../assets/img/pcPixelArt.png";
  public profileImage: string = "../../assets/img/Foto_de_Perfil.jpg";
  public linkedinLogo: string = "../../assets/img/linkedinLogo.png";
  public githubLogo: string = "../../assets/img/githubLogo.png";
  public cvLogo: string = "../../assets/img/curriculum-Icon.png";
  public freecodecampLogo: string = "../../assets/img/freeCodeCamp-Icon.png";

  public animacionIniciada: boolean = false;

  constructor(
    private renderer: Renderer2,
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
        console.log("animacion")
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'transform', 'translate(0px, 0px)');
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'animation', 'movimientoInicial 1s ease 1');
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'animationDelay', '0.5s');
        this.animacionIniciada = true;
      } else {
        console.log("movimiento")
        this.renderer.setStyle(this.pcPixelArt.nativeElement, 'transform', `translate(${xMov}px, ${yMov}px)`);
      }
    });
  }

}
