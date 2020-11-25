import { TestBed, inject } from '@angular/core/testing';

import { AddcardComponent } from './addcard.component';

describe('a addcard component', () => {
	let component: AddcardComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AddcardComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AddcardComponent], (AddcardComponent) => {
		component = AddcardComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});