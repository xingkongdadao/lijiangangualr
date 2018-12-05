import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordmeansComponent } from './wordmeans.component';

describe('WordmeansComponent', () => {
  let component: WordmeansComponent;
  let fixture: ComponentFixture<WordmeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordmeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordmeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
