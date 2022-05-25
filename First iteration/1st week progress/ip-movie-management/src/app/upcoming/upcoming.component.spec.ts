import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {UpcomingComponent} from './upcoming.component';

describe('UpcomingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UpcomingComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UpcomingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ip-movie-management'`, () => {
    const fixture = TestBed.createComponent(UpcomingComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('ip-movie-management');
  });

  it("endpoint", () => {
    const fixture = TestBed.createComponent(UpcomingComponent);
    const component = fixture.componentInstance;
    expect(component.getUpcomingEndpoint).toBe("http://127.0.0.1:8000/api/get_upcoming/");
  });

  it("movieList not empty", () => {
    const fixture = TestBed.createComponent(UpcomingComponent);
    const component = fixture.componentInstance;
    expect(component.upcomingMovieList.length).toBeGreaterThan(0);
  });

  it("read more button", () => {
    const fixture = TestBed.createComponent(UpcomingComponent);
    const data = fixture.nativeElement;
    expect(data.querySelector(".card__button").textContent).toContain("Read more");
  });
});
