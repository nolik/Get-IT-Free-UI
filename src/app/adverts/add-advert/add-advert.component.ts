import {Component, OnInit} from '@angular/core';
import {AdvertModel, AdvertStatus} from '../advert/advert.model';
import {NgForm} from '@angular/forms';
import {AdvertService} from '../advert.service';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-advert',
    templateUrl: './add-advert.component.html',
    styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
    private addedAdvert: AdvertModel;

    constructor(private advertService: AdvertService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onAddAdvert(form: NgForm) {
        const value = form.value;
        const newAdvert = new AdvertModel(undefined, value.name, value.content, new Date,
            'https://loremflickr.com/320/240/book',
            AdvertStatus.FREE, value.price);
        const userId = this.userService.currentUser.id;
        this.advertService.addAdvert(userId, newAdvert);
        this.router.navigateByUrl("/user-cabinet")
    }
}
