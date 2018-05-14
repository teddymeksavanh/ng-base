import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { ApiService } from './api.service';
import { RootObject } from '@models/rootobject';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

import { HeadersService } from './headers.service';

import { Observable, Subscription } from 'rxjs';
import { resolve } from 'dns';

@Injectable()
export class SpaceService {
    private apiUrl = 'https://api.spacexdata.com/v2/launches?launch_year=2017&rocket_id=falcon9&core_reuse=true';

    constructor(
        private localStorageService: LocalStorageService,
        private apiService: ApiService,
        private http: Http,
        private headersService: HeadersService,
        private router: Router
    ) { }

    fetchAll(): Observable<RootObject[]> {
        return this.http.get(this.apiUrl)
            .map(this.apiService.handleResponse)
            .catch(this.apiService.handleError);
    }
}
