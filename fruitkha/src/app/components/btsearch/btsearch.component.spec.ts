import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsearchComponent } from './btsearch.component';

describe('BtsearchComponent', () => {
  let component: BtsearchComponent;
  let fixture: ComponentFixture<BtsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
