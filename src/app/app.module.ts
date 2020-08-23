import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './common/_helpers/fake-backend';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './common/_helpers/';
import { AppComponent } from './app.component';
import { AlertComponent } from './common/_components/alert.component';
import { HomeComponent } from './pages/home';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { VideoComponent } from './pages/home/video/video.component';
import { NavComponent } from './sub-components/nav/nav.component';
import { ScrollUpComponent } from './sub-components/scroll-up/scroll-up.component';
import { VideoviewComponent } from './pages/home/videoview/videoview.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoaderComponent } from './sub-components/loader/loader.component';;
import { CategoryComponent } from './pages/home/category/category.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ProfileComponent,
    VideoComponent,
    NavComponent,
    ScrollUpComponent,
    VideoviewComponent,
    LoaderComponent,
    CategoryComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
