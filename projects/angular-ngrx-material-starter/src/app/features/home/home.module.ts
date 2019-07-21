import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';

@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ReactiveFormsModule]
})
export class HomeModule {}
