import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmponentedueComponent } from './omponentedue.component';

describe('OmponentedueComponent', () => {
  let component: OmponentedueComponent;
  let fixture: ComponentFixture<OmponentedueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmponentedueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmponentedueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
