import { Component, input } from '@angular/core';
import { SocialLinksComponent } from "../social-links/social-links.component";
import { TechPillComponent } from '../tech-pill/tech-pill.component';
import { CvInfo } from '../../store/cvinfo.store';

@Component({
  selector: 'app-hero',
  imports: [SocialLinksComponent, TechPillComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  cvinfo = input.required<CvInfo>();

}
