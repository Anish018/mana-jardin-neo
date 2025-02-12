import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection2Component } from './home-section-2.component';

describe('HomeSection2Component', () => {
  let component: HomeSection2Component;
  let fixture: ComponentFixture<HomeSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSection2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
