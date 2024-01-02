import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  @ViewChild('pcPixelArt', { static: true }) pcPixelArt!: ElementRef;

  public pcImage: string = "../../assets/img/pcPixelArt.png";


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
