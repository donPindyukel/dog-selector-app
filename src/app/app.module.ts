import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DogSelectorContainerComponent } from './containers/dog-selector-container/dog-selector-container.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { breedsReducer } from './store/reducers/breeds.reducer';
import { BreedsEffects } from './store/effects/breeds.effects';
import { BreedsDropdownComponent } from './components/breeds-dropdown/breeds-dropdown.component';
import { MakeUpFirstLetterPipe } from './shared/pipes/make-up-first-letter.pipe';
import { PictureComponent } from './components/picture/picture.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DogSelectorContainerComponent,
    NotFoundComponent,
    BreedsDropdownComponent,
    MakeUpFirstLetterPipe,
    PictureComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({breedsReducer}),
    EffectsModule.forRoot([BreedsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
