import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection6Component } from './discover-jardin-neo-section-6.component';

describe('DiscoverJardinNeoSection6Component', () => {
  let component: DiscoverJardinNeoSection6Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
