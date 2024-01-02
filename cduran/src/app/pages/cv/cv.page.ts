import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.page.html',
  styleUrl: './cv.page.scss',
})
export class CvPage implements OnInit {

  public pdf: string = "../../../assets/archivos/cv.pdf";

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
