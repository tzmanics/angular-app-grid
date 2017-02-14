import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule ) from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { SponsorGridComponent } from './sponsor-grid/sponsor-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SponsorGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
