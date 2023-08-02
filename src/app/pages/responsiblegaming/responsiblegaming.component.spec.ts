import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblegamingComponent } from './responsiblegaming.component';

describe('ResponsiblegamingComponent', () => {
  let component: ResponsiblegamingComponent;
  let fixture: ComponentFixture<ResponsiblegamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiblegamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiblegamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
