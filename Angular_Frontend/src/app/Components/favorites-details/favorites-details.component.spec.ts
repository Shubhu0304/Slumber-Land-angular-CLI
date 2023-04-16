import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesDetailsComponent } from './favorites-details.component';

describe('FavoritesDetailsComponent', () => {
  let component: FavoritesDetailsComponent;
  let fixture: ComponentFixture<FavoritesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
