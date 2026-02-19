import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-portfolio-body',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './portfolio-body.component.html',
  styleUrl: './portfolio-body.component.css',
})
export class PortfolioBodyComponent {

}
