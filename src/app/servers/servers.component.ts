import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent {
  allowNewServer = true;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }
}
