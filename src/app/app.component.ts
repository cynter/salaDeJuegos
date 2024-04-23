import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salaDeJuegos';

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
