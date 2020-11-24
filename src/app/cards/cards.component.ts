import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/services/card'

@Component({
	selector: 'cards',
	templateUrl: 'cards.component.html'
})

export class CardsComponent implements OnInit {
  cards: Card[];
  constructor(public cardService: CardService ) {}

	ngOnInit() {
    this.cardService.getCards().subscribe(cards => {
      //console.log(cards);
      this.cards = cards;

    })
  }
}
