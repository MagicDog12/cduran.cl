import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ScrollService } from "../../services/scroll.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnInit {
  @ViewChild('pcPixelArt', { static: true }) pcPixelArt!: ElementRef;

  public profileImage: string = "../../assets/img/profile.jpeg";
  public linkedinLogo: string = "../../assets/img/linkedinLogo.png";
  public githubLogo: string = "../../assets/img/githubLogo.png";
  public githubLogo2: string = "../../assets/img/github-mark.svg";
  public cvLogo: string = "../../assets/img/curriculum-Icon.png";
  public freecodecampLogo: string = "../../assets/img/freeCodeCamp-Icon.png";

  constructor(
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    this.scrollService.scrollToTopOnRouterChange();
  }
}
