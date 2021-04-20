import { NgModule } from '@angular/core';
// import { PrimeNgModule } from 'src/app/prime-ng.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
    declarations: [
    ],
    exports:[
    ],
    imports: [
      RouterModule,
      CommonModule,
      PrivateRoutingModule,
      PrimeNgModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: []
  })
  export class PrivateModule { }