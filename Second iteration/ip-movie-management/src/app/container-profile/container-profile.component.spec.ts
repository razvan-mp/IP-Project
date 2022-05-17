import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProfileComponent } from './container-profile.component';

describe('ContainerProfileComponent', () => {
  let component: ContainerProfileComponent;
  let fixture: ComponentFixture<ContainerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
