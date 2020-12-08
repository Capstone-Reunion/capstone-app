import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Card } from 'src/app/services/card';

import { map } from 'rxjs/operators';
//import { userInfo } from 'os';
import * as firebase from 'firebase';

@Injectable()

export class CardService {
  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;
  cardDoc: AngularFirestoreDocument<Card>;
  user = firebase.auth().currentUser;
  constructor(public afs: AngularFirestore ) {
    

    this.cardsCollection = this.afs.collection('cards', ref => ref.where('uid', '==', this.user.uid));

    this.cards = this.cardsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Card;
        data.id = a.payload.doc.id;
        return data;
    });
    }));

  }


  getCards(){
    return this.cards;
  }

  addCards(card: Card){
    this.cardsCollection.add(card);
  }

  deleteCard(card: Card){
    this.cardDoc = this.afs.doc(`cards/${card.id}`);
    this.cardDoc.delete();
  }

  updateItem(card: Card){
    this.cardDoc = this.afs.doc(`cards/${card.id}`);
    this.cardDoc.update(card);
  }



}
