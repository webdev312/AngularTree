import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.css']
})
export class RightpanelComponent implements OnInit {
  @Input() ctrlData: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.ctrlData);
  }

}
