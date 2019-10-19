import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdvertModel} from './advert.model';
import {AdvertService} from '../advert.service';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-advert',
    templateUrl: './advert.component.html',
    styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
    @Input() advert: AdvertModel;
    @Input() index: number;
    isBooked = false;

    constructor(private advertService: AdvertService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSelected() {
        // this.router.navigate(['advert-detail/', this.advert.id]);
    }

    onBook() {
        console.log(JSON.stringify(this.advert));
        this.userService.bookAdvert(this.advert.id)
            .subscribe(
                () => this.isBooked = true
            );
    }
}
