import {animate, state, style, transition, trigger} from '@angular/animations';

export const flipStae_animation = trigger('flipState', [
  state('active', style({
    transform: 'rotateY(180deg)'
  })),
  state('inactive', style({
    transform: 'rotateY(0)'
  })),
  transition('active => inactive', animate('500ms ease-out')),
  transition('inactive => active', animate('500ms ease-in'))
]);
