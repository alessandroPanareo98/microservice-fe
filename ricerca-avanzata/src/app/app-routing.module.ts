import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmponentedueComponent } from './omponentedue/omponentedue.component';

const routes: Routes = [
  { path: 'ricercaavanzata',component: OmponentedueComponent, data: { microApp: 'ricercaavanzata' } },
  { path: 'header',component: OmponentedueComponent, data: { microApp: 'header' } },
  { path: 'angular-sub',component: OmponentedueComponent, data: { microApp: 'angular-sub' } },
  { path: '**', pathMatch: 'full', redirectTo: '/ricercaavanzata' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }