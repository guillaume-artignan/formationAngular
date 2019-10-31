import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.css']
})
export class TestDirectiveComponent implements OnInit {

  condition : boolean = true;

  @ViewChild("A")
  templateA : TemplateRef<any>;

  @ViewChild("B")
  templateB : TemplateRef<any>;

  templateCurrent : TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  echange(){
    if (this.templateCurrent==this.templateA)
      this.templateCurrent = this.templateB;
    else this.templateCurrent = this.templateA; 
  }

}
