import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})

export class GridItemTitleDirective {
  
  @HostBinding('style.grid-area') gridArea = 'title'; 
  @HostBinding('style.font-size') @Input() appGridItemTitle='0.5rem';
}