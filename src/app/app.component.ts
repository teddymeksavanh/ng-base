import { Component, OnInit } from '@angular/core';
import { AppReadyEvent } from './app-ready.component';
import { HeadersService } from '@app/services/headers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor (
    private appReadyEvent: AppReadyEvent,
    private headersService: HeadersService
  ) {
    appReadyEvent.trigger();
  }

  ngOnInit() {}

  onActivate(e){
    window.scrollTo(0, 0);
  }
}
