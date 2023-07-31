import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiveStepProcessComponent } from './five-step-process.component';
import { FiveStepProcessRoutingModule } from './five-step-process.component.routing';
import { TimelineComponentModule } from 'src/app/components/timeline-component/timeline.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FiveStepProcessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FiveStepProcessRoutingModule,
    TimelineComponentModule,
    MatInputModule
  ]
})
export class FiveStepProcessModule { }