import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

  private _api_url = '/api';

  private _refresh_token_url = this._api_url + '/refresh';

  private _login_url = this._api_url + '/login';

  private _logout_url = this._api_url + '/logout';

  private _change_password_url = this._api_url + '/changePassword';

  private _signup_url = this._api_url + '/signup';

  private _adverts_url = this._api_url + '/adverts';

  private _add_advert_url = this._api_url + '/add-advert';

  private _get_user_info = this._api_url + '/get-user-info';

  private _file_upload = this._api_url + '/file-upload';

  private _get_all_files = this._api_url + '/get-all-files';

  get refresh_token_url(): string {
    return this._refresh_token_url;
  }

  get login_url(): string {
    return this._login_url;
  }

  get logout_url(): string {
    return this._logout_url;
  }

  get change_password_url(): string {
    return this._change_password_url;
  }

  get signup_url(): string {
    return this._signup_url;
  }

  get adverts_url(): string {
    return this._adverts_url;
  }

  get get_user_info(): string {
    return this._get_user_info;
  }

  get add_advert_url(): string {
    return this._add_advert_url;
  }

  get get_all_files(): string {
    return this._get_all_files;
  }

  set get_all_files(value: string) {
    this._get_all_files = value;
  }
  get file_upload(): string {
    return this._file_upload;
  }

  set file_upload(value: string) {
    this._file_upload = value;
  }
}
