import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendasRoutingModule } from './tiendas-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TiendasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class TiendasModule { }
