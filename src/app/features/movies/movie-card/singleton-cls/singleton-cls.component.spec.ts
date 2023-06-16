import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonClsComponent } from './singleton-cls.component';

describe('SingletonClsComponent', () => {
  let component: SingletonClsComponent;
  let fixture: ComponentFixture<SingletonClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingletonClsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingletonClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
