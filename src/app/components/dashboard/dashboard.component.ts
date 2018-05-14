import { Component, OnInit } from '@angular/core';
import { SpaceService } from '@services/space.service';
import { RootObject } from '@models/rootobject';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public rootobject: Observable<RootObject[]>;

    constructor(
        private spaceService: SpaceService
    ) { }

    ngOnInit() {
        this.rootobject = this.fetchRootObject();
    }

    fetchRootObject = () => this.spaceService.fetchAll();
}
