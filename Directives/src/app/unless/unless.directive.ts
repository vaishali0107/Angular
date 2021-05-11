import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input() set unless(value:boolean){
if(!value){
this.vcref.createEmbeddedView(this.temref);
}else{
this.vcref.clear();
}
}
  constructor(private temref:TemplateRef<any>,private vcref:ViewContainerRef) { }

}
