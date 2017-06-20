import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { SubareaService } from './services/subareaService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("area") area;
  @ViewChild("subarea") subarea;
  @ViewChild("nav") nav;
  m;
  n;
  columns = 10;
  rows = 10;
  heigth;
  

  constructor(public _subareaService: SubareaService) {
    this.m = this.genArray(this.columns);
    this.n = this.genArray(this.rows);
  }

  ngOnInit() {
    this.calculateSubAreaHeight();
  }


  @HostListener('window:resize', ['$event.target'])
  onResize() {
    this.calculateSubAreaHeight();
  }

  calculateSubAreaHeight() {
    this.heigth = this.area.nativeElement.offsetHeight - (this.nav.nativeElement.offsetHeight + 30);
    this._subareaService.subareaHeight = this.heigth / (this.rows);
  }

  genArray(n) {
    return new Array(n);
  };

  change(){
    console.log(this.columns);
    this.m = this.genArray(this.columns);
    this.n = this.genArray(this.rows);
    this.calculateSubAreaHeight();
  }
}
