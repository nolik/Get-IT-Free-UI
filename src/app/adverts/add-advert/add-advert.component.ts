import {Component, OnInit} from '@angular/core';
import {AdvertModel, AdvertStatus} from '../advert/advert.model';
import {NgForm} from '@angular/forms';
import {AdvertService} from '../advert.service';
import {UserService} from '../../service/user.service';

@Component({
    selector: 'app-add-advert',
    templateUrl: './add-advert.component.html',
    styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
    private addedAdvert: AdvertModel;

    constructor(private advertService: AdvertService,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    onAddAdvert(form: NgForm) {
        const value = form.value;
        const newAdvert = new AdvertModel(undefined, value.name, value.content, new Date,
            'https://loremflickr.com/320/240/book',
            AdvertStatus.FREE);
        const userId = this.userService.currentUser.id;
        this.advertService.addAdvert(userId, newAdvert);
    }
}
