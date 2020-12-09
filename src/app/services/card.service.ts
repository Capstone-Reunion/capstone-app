import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Card } from 'src/app/services/card';
import * as firebase from 'firebase';

import { map } from 'rxjs/operators';

@Injectable()
export class CardService {

  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;
  cardDoc: AngularFirestoreDocument<Card>;
  user = firebase.auth().currentUser;

  constructor(public afs: AngularFirestore,) {

    this.cardsCollection = this.afs.collection('cards', ref => ref.where('uid', '==', this.user.uid));



  }

  getCards(sort: string){
    this.cards = this.afs.collection('cards', ref => ref.where('uid', '==', this.user.uid) && ref.orderBy(sort)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Card;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
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
