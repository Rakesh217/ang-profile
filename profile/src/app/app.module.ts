import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ServiceappService} from './serviceapp.service';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ServiceappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
