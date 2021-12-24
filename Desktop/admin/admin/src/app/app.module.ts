import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { UsersComponent } from './admin/users/users.component';
import { RestoComponent } from './admin/resto/resto.component';
import { SideBarAdminComponent } from './admin/side-bar-admin/side-bar-admin.component';
import { ContasComponent } from './admin/contas/contas.component';
import { HommeComponent } from './admin/homme/homme.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilAdminComponent,
    UsersComponent,
    RestoComponent,
    SideBarAdminComponent,
    ContasComponent,
    HommeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
