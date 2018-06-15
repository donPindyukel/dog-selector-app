import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogSelectorContainerComponent } from './containers/dog-selector-container/dog-selector-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes  = [
  { path: '', component: DogSelectorContainerComponent },
  { path: ':breed', component: DogSelectorContainerComponent },
  { path: 'not/found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
