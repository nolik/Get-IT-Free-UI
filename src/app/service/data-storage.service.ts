import {Injectable} from '@angular/core';
import {AdvertModel} from '../adverts/advert/advert.model';
import {Observable} from 'rxjs';
import {ConfigService} from './config.service';
import {ApiService} from './api.service';

@Injectable()
export class DataStorageService {

  constructor(private config: ConfigService,
              private apiService: ApiService) {
  }

  getAdverts(): Observable<AdvertModel[]> {
    console.log('call DataStorageService + ' + this.config.adverts_url);
    return this.apiService.get(this.config.adverts_url);
  }

  add_advert_new(userId: number, newAdvert: AdvertModel) {
    const path: string = this.config.users_api + `/${userId}/add-advert`;
    console.log(path);
    return this.apiService.post(path, newAdvert)
        .subscribe(any => console.log(any));
  }
}
