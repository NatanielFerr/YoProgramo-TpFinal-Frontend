import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { GuardGuard } from './services/guard.guard';


const routes: Routes = [
  {path: 'intro', component: IntroComponent, canActivate: [GuardGuard]},
  {path: '', redirectTo: '/intro', pathMatch: 'full'},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
