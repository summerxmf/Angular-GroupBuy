import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  id:number,
  imgUrl: string,
  link: string,
  caption: string
  
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  scrollHeight = '160px';
  @Input()
  sliders: ImageSlider[] = [];
  @Input()
  intervalBySeconds: number = 2
  @ViewChild('imageSlider',{static: true}) imgSlider: ElementRef;
  
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  intervalId=  null;

  selectIndex: number = 0;
  
  constructor(private rd2: Renderer2) {

  }
  ngOnInit(): void {    
  }
  ngAfterViewInit(): void {
    if(this.intervalBySeconds <= 0) {
      return
    }
    this.intervalId = setInterval(()=>{
        
      this.rd2.setProperty(this.imgSlider.nativeElement,
         'scrollLeft', 
         this.getIndex(++this.selectIndex)*this.imgSlider.nativeElement.scrollWidth/this.sliders.length)
    }, this.intervalBySeconds * 1000) 
  }
  
  ngOnDestroy(): void {    
     clearInterval(this.intervalId)   
  }

  getIndex(index) {
    return index>=0 ? index % this.sliders.length : (this.sliders.length - Math.abs(index)) % this.sliders.length
  }
 
  handleScoll(e) {
    // scroll ratio
    const ratio = e.target.scrollLeft / e.target.scrollWidth* this.sliders.length ;     
    this.selectIndex = Math.round(ratio)
    // console.log(this.selectIndex)
  }

}
