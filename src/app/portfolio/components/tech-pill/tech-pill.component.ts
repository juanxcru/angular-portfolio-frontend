import { Component, computed, input } from '@angular/core';
import { CvInfo } from '../../store/cvinfo.store';

@Component({
  selector: 'app-tech-pill',
  imports: [],
  templateUrl: './tech-pill.component.html',
  styleUrl: './tech-pill.component.css',
})



export class TechPillComponent {
  readonly stack = input.required<Record<string, string[]>>();
  
  readonly pills = computed( () => {
    const pillsArr = Object.values(this.stack());
    const pills: string[] = [];
    for ( let i = 0; i < pillsArr.length ; i++) {
      const arr = pillsArr[i];
      for (let n= 0; n < 2 ; n++){
        if(arr[n]!= null){
          pills.push(arr[n]);
        }
      }
    }
    return pills;
  }
  );
  
}
  



