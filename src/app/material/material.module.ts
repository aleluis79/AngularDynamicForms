import { NgModule } from '@angular/core';
import { MatFormFieldModule,
         MatSelectModule,
         MatInputModule
       } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
