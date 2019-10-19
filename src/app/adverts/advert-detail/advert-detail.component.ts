import {Component, OnInit} from '@angular/core';
import {AdvertModel} from '../advert/advert.model';
import {AdvertService} from '../advert.service';
import {ActivatedRoute, Data, Params} from '@angular/router';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.scss']
})
export class AdvertDetailComponent implements OnInit {
  detailAdvert: AdvertModel;

  constructor(private advertService: AdvertService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.detailAdvert = data['detailedAdvert'];
        }
      );
  }

  orderAdvert() {
    this.detailAdvert.ordered = true;
  }

}
