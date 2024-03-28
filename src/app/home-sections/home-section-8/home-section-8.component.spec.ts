import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection8Component } from './home-section-8.component';

describe('HomeSection8Component', () => {
  let component: HomeSection8Component;
  let fixture: ComponentFixture<HomeSection8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSection8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSection8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
