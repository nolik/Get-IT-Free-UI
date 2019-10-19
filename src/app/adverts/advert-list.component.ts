import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdvertModel} from './advert/advert.model';
import {AdvertService} from './advert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-adverts',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit, OnDestroy {
  private advertSubscription: Subscription;

  adverts: AdvertModel[];

  constructor(private advertService: AdvertService) {
  }

  ngOnInit() {
    this.adverts = this.advertService.getAdverts();
    this.advertSubscription = this.advertService.advertsChanged
      .subscribe(
        (adverts: AdvertModel[]) => {
          this.adverts = adverts;
        }
      );
  }

  ngOnDestroy() {
    this.advertSubscription.unsubscribe();
  }

}
