import { Directive,OnInit,Renderer2 ,ElementRef,HostListener, HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor:string = 'yellow';
  @Input() highlightColor:string = 'blue';
@HostBinding('style.backgroundColor')  backgroundColor:string=this.defaultColor;
constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
    }

    @HostListener('click') onClick(){
      this.backgroundColor=this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor=this.defaultColor;
    }
  
  
}
