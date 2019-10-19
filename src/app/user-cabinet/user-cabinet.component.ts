import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { AdvertModel } from '../adverts/advert/advert.model';

@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.css']
})
export class UserCabinetComponent implements OnInit {
  userAdvert: AdvertModel[];
  bookedAdvert: AdvertModel[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserAdverts().subscribe(adverts => {

      console.log(JSON.stringify(adverts));
      this.userAdvert = adverts.userAdverts;
      this.bookedAdvert = adverts.bookedAdverts;
    });

  }

}
