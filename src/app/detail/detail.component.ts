import { Component } from "@angular/core";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
    `
      .white
        color: white
    `
  ]
})
export class DetailComponent{
  showDetail = false;
  logs: Date[] = [];

  onToggleShowDetail(){
    this.logs.push(new Date());
    this.showDetail = !this.showDetail;
  }
}
