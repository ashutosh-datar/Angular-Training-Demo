import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AdminComponent],
  exports: []
})
export class AdminModule { }
