import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from './config.service';

@Injectable()
export class UploadFileService {

  constructor(private apiService: ApiService,
              private config: ConfigService) {
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const uploadHeaders = new HttpHeaders({
      'reportProgress': 'true',
      'responseType': 'text'
    });

    return this.apiService.post(this.config.file_upload, formdata, uploadHeaders);
  }

  getFiles(): Observable<string[]> {
    return this.apiService.get(this.config.get_all_files);
  }
}
