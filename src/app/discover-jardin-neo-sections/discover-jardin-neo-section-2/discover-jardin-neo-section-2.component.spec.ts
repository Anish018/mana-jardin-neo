import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection2Component } from './discover-jardin-neo-section-2.component';

describe('DiscoverJardinNeoSection2Component', () => {
  let component: DiscoverJardinNeoSection2Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
