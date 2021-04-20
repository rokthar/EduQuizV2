import { NgModule } from '@angular/core';
// import { PrimeNgModule } from 'src/app/prime-ng.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
    declarations: [
      PerfilComponent
    ],
    exports:[
    ],
    imports: [
      RouterModule,
      CommonModule,
      UsersRoutingModule,
      PrimeNgModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: []
  })
  export class UsersModule { }