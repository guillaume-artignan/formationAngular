import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[repeat]'
})
export class RepeatDirective {

  constructor(private container : ViewContainerRef, private template : TemplateRef<any>) { }

  @Input() set repeat(nb){
    for (var i = 0;i<nb;i++){
      this.container.createEmbeddedView(this.template);
    }
  }

}
