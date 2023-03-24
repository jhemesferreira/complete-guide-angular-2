import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers: string[] = ['Server 1', 'Server 2'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = '';
    this.serverCreationStatus = `Serve was created! ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; //TypeScript Casting
  }
}
