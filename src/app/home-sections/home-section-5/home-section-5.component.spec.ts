import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection5Component } from './home-section-5.component';

describe('HomeSection5Component', () => {
  let component: HomeSection5Component;
  let fixture: ComponentFixture<HomeSection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSection5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
