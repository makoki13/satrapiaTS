import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PalacioComponent} from './palacio/palacio.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: './palacio', component: PalacioComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [PalacioComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
