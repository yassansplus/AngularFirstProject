import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus  :string;

  constructor() { }

  ngOnInit() {
  }
  getStatus(){
    return this.appareilStatus;
  }
}
