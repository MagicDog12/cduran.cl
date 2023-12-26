import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { CvPage } from './pages/cv/cv.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { MallaPage } from './pages/malla/malla.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'cv',
    component: CvPage,
    pathMatch: 'full',
  },
  {
    path: 'malla',
    component: MallaPage,
    pathMatch: 'full',
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
