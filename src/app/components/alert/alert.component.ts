import { Component, OnInit, Input } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message:string;
  constructor() { }

  ngOnInit() {
  }

}
