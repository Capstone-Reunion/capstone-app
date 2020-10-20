import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material Ui
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

//Firebase services
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// import router
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';

// config for connection
const firebaseConfig = {
  apiKey: "AIzaSyDGb9Bu39r60JRBfrFUEiDm25OFPE0OxuQ",
  authDomain: "ezaccounts-ad5b7.firebaseapp.com",
  databaseURL: "https://ezaccounts-ad5b7.firebaseio.com",
  projectId: "ezaccounts-ad5b7",
  storageBucket: "ezaccounts-ad5b7.appspot.com",
  messagingSenderId: "312811849272",
  appId: "1:312811849272:web:44fdc6702fe0666ee088cd",
  measurementId: "G-YZ5MR8JV2S"
};

@NgModule({
  declarations: [
    AppComponent,FormComponent,CardsComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSliderModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
