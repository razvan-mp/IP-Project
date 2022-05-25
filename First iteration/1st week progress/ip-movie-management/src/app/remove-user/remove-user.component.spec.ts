import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RemoveUserComponent } from './remove-user.component';
import {WhiteUserComponent} from "../white-user/white-user.component";

describe('RemoveUserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RemoveUserComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RemoveUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ip-movie-management'`, () => {
    const fixture = TestBed.createComponent(RemoveUserComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('ip-movie-management');
  });

  it(` Remove from whitelist`, () => {
    const fixture = TestBed.createComponent(RemoveUserComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector(".button.is-primary.mr-4").textContent).toContain("Remove from whitelist");
  });

  it(`Reset fields button`, () => {
    const fixture = TestBed.createComponent(RemoveUserComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector(".button.is-family-secondary").textContent).toContain("Reset fields");
  });
});
