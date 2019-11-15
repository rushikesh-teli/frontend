import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  serverID: number = 1010;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
