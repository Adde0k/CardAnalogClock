import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnalogClockComponent } from './card-analog-clock.component';

describe('CardAnalogClockComponent', () => {
    let component: CardAnalogClockComponent;
    let fixture: ComponentFixture<CardAnalogClockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardAnalogClockComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(CardAnalogClockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
