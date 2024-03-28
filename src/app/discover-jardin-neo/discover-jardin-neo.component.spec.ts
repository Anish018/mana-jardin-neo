import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJardinNeoComponent } from './discover-jardin-neo.component';

describe('DiscoverJardinNeoComponent', () => {
  let component: DiscoverJardinNeoComponent;
  let fixture: ComponentFixture<DiscoverJardinNeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverJardinNeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverJardinNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
