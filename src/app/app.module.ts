import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor} from '../app/common/helpers/_helpers/jwt.interceptor';
import { AppComponent } from './app.component';
import { AlertComponent } from '../app/common/helpers/_components/alert.component';
import { HomeComponent } from './pages/home';
import { ProfileComponent } from '../app/pages/home/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { VideoComponent } from '../app/pages/video/video.component';
import { NavComponent } from '../app/pages/subComponents/nav/nav.component';
import { ScrollUpComponent } from '../app/pages/subComponents/scroll-up/scroll-up.component';
import { VideoviewComponent } from '../app/pages/video/videoview/videoview.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoaderComponent } from '../app/pages/subComponents/loader/loader.component';
import { CategoryComponent } from '../app/pages/dashboard/category/category.component';
import { FooterComponent } from '../app/pages/subComponents/footer/footer.component';
import { ErrorInterceptor } from './common/helpers/_helpers';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
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
    FooterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
