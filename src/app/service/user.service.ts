
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import { AdvertModel } from '../adverts/advert/advert.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    currentUser;

    constructor(private apiService: ApiService,
                private config: ConfigService) {
    }

    initUser() {
        return this.apiService.get(this.config.refresh_token_url).toPromise()
            .then(res => {
                if (res.access_token !== null) {
                    return this.getUserInfo().toPromise()
                        .then(user => {
                            this.currentUser = user;
                        });
                }
            })
            .catch(() => null);
    }

  getUserInfo() {
    return this.apiService.get(this.config.get_user_info).pipe(map(user => this.currentUser = user));
  }

  getUserAdverts(): Observable<AdvertModel[]> {
    const path = this.config.user_advert + `/${this.currentUser.id}/adverts`;
    console.log(path);
    return this.apiService.get(path);
  }

    // bookAdvert(): string {
    //     const path: string = this.config.users_api + `/${userId}/add-advert`;
    //     console.log(path);
    //     return this.apiService.post(path, newAdvert)
    //         .subscribe(any => console.log(any));
    //     return '';
    // }
}
