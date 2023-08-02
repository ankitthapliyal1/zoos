import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairplayComponent } from './fairplay.component';

describe('FairplayComponent', () => {
  let component: FairplayComponent;
  let fixture: ComponentFixture<FairplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
