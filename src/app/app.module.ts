import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AdvertListComponent} from './adverts/advert-list.component';
import {AddAdvertComponent} from './adverts/add-advert/add-advert.component';
import {AdvertComponent} from './adverts/advert/advert.component';
import {AdvertDetailComponent} from './adverts/advert-detail/advert-detail.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AdvertService} from './adverts/advert.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './service/auth.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AdvertDetailResolver} from './adverts/advert-detail/advert-detail-resolver.service';
import {AdvertEditComponent} from './adverts/advert-detail/advert-edit/advert-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {DataStorageService} from './service/data-storage.service';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SignupComponent} from './signup/signup.component';
import {UserService} from './service/user.service';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {ApiService} from './service/api.service';
import {ConfigService} from './service/config.service';
import {LoginComponent} from './login';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountMenuComponent} from './header/account-menu/account-menu.component';
import {ChangePasswordComponent} from './change-password';
import {ListUploadComponent} from './adverts/add-advert/file-upload/list-upload/list-upload.component';
import {DetailsUploadComponent} from './adverts/add-advert/file-upload/details-upload/details-upload.component';
import {FormUploadComponent} from './adverts/add-advert/file-upload/form-upload/form-upload.component';
import {UploadFileService} from './service/upload-file.service';
import {UserCabinetComponent} from './user-cabinet/user-cabinet.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

export function initUserFactory(userService: UserService) {
  return () => userService.initUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountMenuComponent,
    AdvertListComponent,
    AddAdvertComponent,
    AdvertComponent,
    AdvertDetailComponent,
    DropdownDirective,
    ErrorPageComponent,
    AdvertEditComponent,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    ChangePasswordComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    UserCabinetComponent
  ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatMenuModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatOptionModule,
        MatSelectModule
    ],
  providers: [
    LoginGuard,
    GuestGuard,
    AdminGuard,
    AdvertService,
    AuthService,
    ApiService,
    ConfigService,
    AdvertDetailResolver,
    HttpClientModule,
    DataStorageService,
    UserService,
    UploadFileService,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserService],
      'multi': true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
