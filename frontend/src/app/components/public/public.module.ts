import { NgModule } from '@angular/core';
// import { PrimeNgModule } from 'src/app/prime-ng.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

@NgModule({
    declarations: [
      MainComponent,
      LoginComponent,
      RegistrarseComponent
    ],
    exports:[
    ],
    imports: [
      RouterModule,
      CommonModule,
      PublicRoutingModule,
      PrimeNgModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: []
  })
  export class PublicModule { }