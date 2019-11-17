import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'Server not created !';
  serverName = 'DefaultName';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  onAddServer(){
    this.serverCreationStatus = 'Server Successfully Created !';
  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
