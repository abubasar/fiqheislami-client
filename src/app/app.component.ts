import { Component, Inject, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NotificationMiddlewareService } from './core/notification-middleware.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public notificationMiddleware: NotificationMiddlewareService) { }

  ngOnInit() {
    this.notificationMiddleware.init();
  }

  toggleSubscription() {
    this.notificationMiddleware.toggleSubscription();
  }

  cleanUrl(url) {
    if (url.indexOf(self.location.origin) >= 0) {
      return url.replace(self.location.origin, '');
    }
    return url;
  }

  removeNotif(notif) {
    var index = this.notificationMiddleware.notifications.indexOf(notif);
    if (index >= 0) {
      this.notificationMiddleware.notifications.splice(index, 1);
    }
  }
}
