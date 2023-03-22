import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'impressum', component: ImpressumComponent },
];

const config = {
  /* instead of use extraOptions for Router */
  onSameUrlNavigation:
    'reload' /**fix to rescroll to same anchor url after scrolling */,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, <ExtraOptions>config)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}