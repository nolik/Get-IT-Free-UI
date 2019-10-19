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
    console.log('call DataStorageService');
    return this.apiService.get(this.config.adverts_url);
  }

  addNewAdvert(newAdvert: AdvertModel) {
    return this.apiService.post(this.config.add_advert_url, newAdvert);
  }
}
