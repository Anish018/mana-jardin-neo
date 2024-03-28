import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection9Component } from './home-section-9.component';

describe('HomeSection9Component', () => {
  let component: HomeSection9Component;
  let fixture: ComponentFixture<HomeSection9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSection9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSection9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
