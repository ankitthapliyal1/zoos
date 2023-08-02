import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/css/layout.scss'],
  animations: [

    trigger('slideFromTopCenter', [
      transition(':enter', [
        style({ transform: 'translate(-50%, -100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translate(-50%, 0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ transform: 'translate(-50%, -100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {

  model: boolean = false

  constructor(private router: Router) {

    this.router.events.subscribe(() => {
      // this code will run on every route change
      // do what you want, here

      this.model = false;
    });

  }

  home() {
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {

  }

  openModel(e: any) {
    this.model = e
  }

}
