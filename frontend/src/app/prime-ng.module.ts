import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule
  ],
  bootstrap: [AppComponent]
})
export class PrimeNgModule { }
