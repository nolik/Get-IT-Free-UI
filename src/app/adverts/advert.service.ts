import {AdvertModel} from './advert/advert.model';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DataStorageService} from '../service/data-storage.service';

@Injectable()
export class AdvertService {

    advertsChanged = new Subject<AdvertModel[]>();

    private adverts: AdvertModel[] = [];

    constructor(private dataStorageService: DataStorageService) {
        console.log('Call constructor of adverService - adverts=' + this.adverts);
        this.dataStorageService.getAdverts().toPromise()
            .then(
                (adverts: AdvertModel[]) => {
                    this.adverts = adverts;
                    console.log('Внутри субскрипшена');
                    this.advertsChanged.next(this.adverts);
                });
    }

    setAdverts(adverts: AdvertModel[]) {
        this.adverts = adverts;
        this.advertsChanged.next(this.adverts.slice());
    }

    getAdverts() {
        // this.dataStorageService.getAdverts().subscribe(
        //   adverts => this.adverts = adverts);
        // this.advertsChanged.next(this.adverts.slice());
        // console.log('getAdverts() - adverts=');
        // this.adverts.forEach(
        //   advert => console.log('advert' + advert._id)
        // );
        return this.adverts.slice();
    }

    getAdvert(id: number) {
        return this.adverts.find(
            (a) => {
                return a._id === id;
            }
        );
    }

    addAdvert(userId: number, newAdvert: AdvertModel) {
        this.dataStorageService.add_advert_new(userId, newAdvert);
        this.adverts.push(newAdvert);
        this.advertsChanged.next(this.adverts.slice());
    }
}
