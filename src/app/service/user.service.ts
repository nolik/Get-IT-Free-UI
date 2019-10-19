
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';

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
}
