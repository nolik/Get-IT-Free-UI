import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdvertModel} from './advert.model';
import {AdvertService} from '../advert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() advert: AdvertModel;
  @Input() index: number;

  constructor(private advertService: AdvertService,
              private router: Router) { }

  ngOnInit() {
  }

  onSelected() {
    this.router.navigate(['advert-detail/', this.advert._id]);
  }
}
