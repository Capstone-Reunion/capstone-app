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

  //unwrapped arrays
  filteredcards: any;

  //filter-able properties
  username: string;
  email: string;
  prio: boolean;

  //active filter track
  filters = {}





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
    private applyFilters(){
      this.filteredcards = _.filter(this.cards, _.conforms(this.filters) )
    }

    filterExact(property:string, rule:any){
      this.filters[property] = val => val == rule
      this.applyFilters()
    }

    filterBoolean(property: string, rule: boolean){
      if (!rule) this.removeFilter(property)
      else{
        this.filters[property] =  val => val
        this.applyFilters()
        }
    }

    removeFilter(property: string){
      delete this.filters[property]
      this[property] = null
      this.applyFilters()
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
