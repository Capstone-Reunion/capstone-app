import { Component, OnInit, Pipe } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/services/card'
import { pipe } from 'rxjs';
import { PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Component({
	selector: 'cards',
	templateUrl: 'cards.component.html'
})

export class CardsComponent implements OnInit {
  cards: Card[];
  editState: boolean = false;
  itemToEdit: Card;
  dSort = 'username';


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor(public cardService: CardService ) {}

	ngOnInit() {




     this.cardService.getCards(this.dSort).subscribe(cards => {
      console.log(this.dSort);

      this.cards = cards;


    })

  }
    sortUsername(){
      this.dSort = 'username';
      this.ngOnInit();
    }

    sortEmail(){
      this.dSort = 'email';
      this.ngOnInit();
    }
    sortAppname(){
      this.dSort = 'appname';
      this.ngOnInit();
    }

    sortPrio(){
      this.dSort = 'prio';
      this.ngOnInit();
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
