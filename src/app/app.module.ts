import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-modal';
import { LocalStorageModule } from 'angular-2-local-storage';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

// Components
import { DashboardComponent } from '@app/components/dashboard/dashboard.component';
import { AppComponent } from '@app/app.component';
import { UserFormComponent } from '@app/components/user/user-form.component';
import { UserFormModalComponent } from '@app/components/user/user-modal.component';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { AppReadyEvent } from '@app/app-ready.component';

// Services
import { ApiService } from '@app/services/api.service';
import { HeadersService } from '@app/services/headers.service';
import { UserService } from '@app/services/user.service';
import { AuthService } from '@app/services/auth.service';
import { SpaceService } from '@app/services/space.service';

// Pipes
import { CamelCasePipe } from '@app/pipes/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipe,
    DashboardComponent,
    NavbarComponent,
    UserFormComponent,
    UserFormModalComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UserFormComponent,
    UserFormModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    RouterModule.forRoot([
        {
            path: '',
            component: DashboardComponent
        }
    ])
  ],
  bootstrap: [AppComponent],
  providers: [
      ApiService,
      HeadersService,
      UserService,
      AuthService,
      AppReadyEvent,
      SpaceService
  ]
})
export class AppModule { }
