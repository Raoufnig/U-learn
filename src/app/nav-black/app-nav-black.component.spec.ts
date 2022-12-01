import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavBlackComponent } from './app-nav-black.component';

describe('AppNavBlackComponent', () => {
  let component: AppNavBlackComponent;
  let fixture: ComponentFixture<AppNavBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavBlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
