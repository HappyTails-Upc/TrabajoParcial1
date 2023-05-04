import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-exp-panel-content',
  templateUrl: './exp-panel-content.component.html',
  styleUrls: ['./exp-panel-content.component.css']
})
export class ExpPanelContentComponent implements OnInit{

  panelOpenState = false;

  ngOnInit() {
  }
}
