import { Directive, Input, ViewContainerRef, TemplateRef, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {

  constructor(private container : ViewContainerRef, private template : TemplateRef<any>) { }

  @Input() set toggle(condition){
    if (condition){
        this.container.clear();
        var viewRef:EmbeddedViewRef<any> = this.container.createEmbeddedView(this.template);
        viewRef.rootNodes[0].childNodes.forEach((node)=>{
          if (node.hasAttribute("off")) node.style.display ="none";
        });
    } else {
        this.container.clear();
        var viewRef:EmbeddedViewRef<any> = this.container.createEmbeddedView(this.template);
        viewRef.rootNodes[0].childNodes.forEach((node)=>{
          if (node.hasAttribute("on")) node.style.display ="none";
        });
    }
  }
}
