import {AdvertModel} from '../advert/advert.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AdvertService} from '../advert.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AdvertDetailResolver implements Resolve<AdvertModel> {
  constructor(private advertService: AdvertService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdvertModel> |
    Promise<AdvertModel> | AdvertModel {
    return this.advertService.getAdvert(+route.params['_id']);
  }
}
