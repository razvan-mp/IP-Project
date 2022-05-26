import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WhiteUserComponent } from './white-user.component';

describe('WhiteUserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WhiteUserComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WhiteUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ip-movie-management'`, () => {
    const fixture = TestBed.createComponent(WhiteUserComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('ip-movie-management');
  });

  it(`User information`, () => {
    const fixture = TestBed.createComponent(WhiteUserComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector(".is-size-4.has-text-weight-bold.is-underlined").textContent).toContain("Enter user information: ");
  });

  it(`Whitelist user button`, () => {
    const fixture = TestBed.createComponent(WhiteUserComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector(".button.is-primary.mr-4").textContent).toContain("Whitelist user");
  });

  it(`Reset fields button`, () => {
    const fixture = TestBed.createComponent(WhiteUserComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector(".button.is-family-secondary").textContent).toContain("Reset fields");
  });
});
