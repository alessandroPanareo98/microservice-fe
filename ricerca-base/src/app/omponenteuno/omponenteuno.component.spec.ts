import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmponenteunoComponent } from './omponenteuno.component';

describe('OmponenteunoComponent', () => {
  let component: OmponenteunoComponent;
  let fixture: ComponentFixture<OmponenteunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmponenteunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmponenteunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
