import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection1Component } from './discover-jardin-neo-section-1.component';

describe('DiscoverJardinNeoSection1Component', () => {
  let component: DiscoverJardinNeoSection1Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
