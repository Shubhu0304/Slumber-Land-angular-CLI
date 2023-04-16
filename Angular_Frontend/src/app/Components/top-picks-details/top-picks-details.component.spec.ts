import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPicksDetailsComponent } from './top-picks-details.component';

describe('TopPicksDetailsComponent', () => {
  let component: TopPicksDetailsComponent;
  let fixture: ComponentFixture<TopPicksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPicksDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPicksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
