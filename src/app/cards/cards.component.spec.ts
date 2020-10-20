import { TestBed, inject } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('a cards component', () => {
	let component: CardsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CardsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CardsComponent], (CardsComponent) => {
		component = CardsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});