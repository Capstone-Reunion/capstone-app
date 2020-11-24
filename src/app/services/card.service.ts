import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Card } from 'src/app/services/card';
import { User } from './user.model';
@Injectable()
export class CardService {
  user$: Observable<User>;
  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;
  cardDoc: AngularFirestoreDocument<Card>;

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('items').valueChanges();

  }

  getCards(){
    return this.cards;
  }

  addCards(card: Card){
    this.cardsCollection.add(card);
  }

  deleteItem(card: Card, user){
    this.cardDoc = this.afs.doc(`users/${user.id}/app/${card.appid}`);
    this.cardDoc.delete();
  }

  updateItem(card: Card, user){
    this.cardDoc = this.afs.doc(`users/${user.id}/app/${card.appid}`);
    this.cardDoc.update(card);
  }



}
