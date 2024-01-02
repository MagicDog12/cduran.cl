import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @ViewChild('pcPixelArt', { static: true }) pcPixelArt!: ElementRef;

  public pcImage: string = "../../assets/img/pcPixelArt.png";

  private animacionIniciada: boolean = false;
  private contentTitle: string = 'Cristian Durán';
  public displayedContentTitle: string = '';
  private indexTitle: number = 0;

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
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'transform', 'translate(0px, 0px)');
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'animation', 'movimientoInicial 1s ease 1');
        // this.renderer.setStyle(this.pcPixelArt.nativeElement, 'animationDelay', '0.5s');
        this.animacionIniciada = true;
      } else {
        this.renderer.setStyle(this.pcPixelArt.nativeElement, 'transform', `translate(${xMov}px, ${yMov}px)`);
      }
    });
    this.typeWriter();
  }

  typeWriter(): void {
    if (this.indexTitle < this.contentTitle.length) {
      this.displayedContentTitle += this.contentTitle.charAt(this.indexTitle);
      this.indexTitle++;
      setTimeout(() => this.typeWriter(), 50);
    } else {
      this.indexTitle = 0;
    }
  }
}
