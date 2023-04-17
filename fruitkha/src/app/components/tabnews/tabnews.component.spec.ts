import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabnewsComponent } from './tabnews.component';

describe('TabnewsComponent', () => {
  let component: TabnewsComponent;
  let fixture: ComponentFixture<TabnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
