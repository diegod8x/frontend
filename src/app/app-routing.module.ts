import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './components/persons/persons.component';

const routes: Routes = [
  { path: 'persons', component: PersonsComponent },
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: '**', redirectTo: '/persons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
