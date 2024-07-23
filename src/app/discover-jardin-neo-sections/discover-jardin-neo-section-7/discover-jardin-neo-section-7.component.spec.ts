import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection7Component } from './discover-jardin-neo-section-7.component';

describe('DiscoverJardinNeoSection7Component', () => {
  let component: DiscoverJardinNeoSection7Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
