import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection7Component } from './home-section-7.component';

describe('HomeSection7Component', () => {
  let component: HomeSection7Component;
  let fixture: ComponentFixture<HomeSection7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSection7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSection7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
