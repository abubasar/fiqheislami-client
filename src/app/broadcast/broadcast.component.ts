import { Component, OnInit } from '@angular/core';
import { NotificationModel, NotificationService } from '../core/generated';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent implements OnInit {

  model: NotificationModel = { url: "", title: "", message: "" }

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  broadcast() {
    this.notificationService.broadcast(this.model).subscribe(() => {
      this.model.url = "";
      this.model.title = "";
      this.model.message = "";
    })
  }
}