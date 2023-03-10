import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const Routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent}
]


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(Routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
