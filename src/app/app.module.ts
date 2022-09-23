import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { LireComponent } from './lire/lire.component';
import { ApiServiceService } from './api-service.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes : Routes = [
  {
    path : 'create',component:CreateComponent
  },
  {
    path: 'lire',component:LireComponent
  },
  {
    path : 'create/:id',component:CreateComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
              ApiServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class AppRoutingModule { }
