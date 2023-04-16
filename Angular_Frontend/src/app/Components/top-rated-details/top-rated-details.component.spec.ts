import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedDetailsComponent } from './top-rated-details.component';

describe('TopRatedDetailsComponent', () => {
  let component: TopRatedDetailsComponent;
  let fixture: ComponentFixture<TopRatedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
