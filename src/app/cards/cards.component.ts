import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/services/card'

@Component({
	selector: 'cards',
	templateUrl: 'cards.component.html'
})

export class CardsComponent implements OnInit {
  cards: Card[];
  editState: boolean = false;
  itemToEdit: Card;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor(public cardService: CardService ) {}

	ngOnInit() {
    this.cardService.getCards().subscribe(cards => {
      //console.log(cards);
      this.cards = cards;

    })
  }

  deleteCard(event, card: Card){
    this.cardService.deleteCard(card);

  }

  editCard(event, card: Card){
    this.editState = true;
    this.itemToEdit = card;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

  updateCard(event, card: Card){
    this.cardService.updateItem(card);
    this.clearState();
  }


}
