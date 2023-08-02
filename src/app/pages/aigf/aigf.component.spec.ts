import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AigfComponent } from './aigf.component';

describe('AigfComponent', () => {
  let component: AigfComponent;
  let fixture: ComponentFixture<AigfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AigfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AigfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
