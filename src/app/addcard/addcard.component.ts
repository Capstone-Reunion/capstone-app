import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/services/card';
//import {AngularFirestore} from '@angular/fire/firestore';
//import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';



@Component({
	selector: 'addcard',
  templateUrl: 'addcard.component.html'
})

export class AddcardComponent implements OnInit {
user = firebase.auth().currentUser;
card: Card = {
  id:'',
  username:'',
  email:'',
  password:'',
  appname:'',
  comments:'',
  prio:false,
  uid:this.user.uid,
}
formatLabel(value: number) {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return value;
}
  constructor(private cardService: CardService){}

  ngOnInit() { }

  onSubmit(){
    
    if(this.card.username != '' && this.card.email != '' && this.card.appname !=''){
      this.cardService.addCards(this.card);
      this.card.username='';
      this.card.email='';
    }else {

    }
  }

}
