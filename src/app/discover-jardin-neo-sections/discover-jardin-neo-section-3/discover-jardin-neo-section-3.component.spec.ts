import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection3Component } from './discover-jardin-neo-section-3.component';

describe('DiscoverJardinNeoSection3Component', () => {
  let component: DiscoverJardinNeoSection3Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
