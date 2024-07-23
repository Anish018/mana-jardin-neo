import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection5Component } from './discover-jardin-neo-section-5.component';

describe('DiscoverJardinNeoSection5Component', () => {
  let component: DiscoverJardinNeoSection5Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
