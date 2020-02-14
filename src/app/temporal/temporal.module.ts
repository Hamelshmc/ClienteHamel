import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporalComponent } from './temporal.component';



@NgModule({
  declarations: [TemporalComponent],
  imports: [
    CommonModule
  ],
  exports: [TemporalComponent]
})
export class TemporalModule { }
