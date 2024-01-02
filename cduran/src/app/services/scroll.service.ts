import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) { }

  scrollToTopOnRouterChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }
}
