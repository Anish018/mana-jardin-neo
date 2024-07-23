import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoSection4Component } from './discover-jardin-neo-section-4.component';

describe('DiscoverJardinNeoSection4Component', () => {
  let component: DiscoverJardinNeoSection4Component;
  let fixture: ComponentFixture<DiscoverJardinNeoSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoSection4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
