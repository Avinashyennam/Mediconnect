import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  
import { PatientCreateComponent } from './mediconnect/components/patientcreate/patientcreate.component';
import { MediconnectModule } from './mediconnect/mediconnect.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    MediconnectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
