import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasComponent } from './admin/contas/contas.component';
import { HommeComponent } from './admin/homme/homme.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { RestoComponent } from './admin/resto/resto.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  {path:'admin/homme',component:HommeComponent},
  {path:'admin/profil',component:ProfilAdminComponent},
  {path:'admin/users',component:UsersComponent},
  {path:'admin/resto',component:RestoComponent},
  {path:'admin/contacts',component:ContasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
