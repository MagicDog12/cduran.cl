import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvPage } from './pages/cv/cv.page';
import { HomePage } from './pages/home/home.page';

import { NgxDocViewerModule } from "ngx-doc-viewer";
import { MallaPage } from './pages/malla/malla.page';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [
    AppComponent,
    CvPage,
    HomePage,
    MallaPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocViewerModule,
    ComponentModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
