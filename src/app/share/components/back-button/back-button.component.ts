import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {
  @Input() isFloat = true;
  get imgUrl() {
    console.log('.......',this.isFloat)
    return this.isFloat? '/assets/icons/back_light.png': '/assets/icons/back_dark.png'
  }
  constructor(private loaction: Location){    
  }

  ngOnInit() {
  }
  handleBack() {
    this.loaction.back()
  }

}
