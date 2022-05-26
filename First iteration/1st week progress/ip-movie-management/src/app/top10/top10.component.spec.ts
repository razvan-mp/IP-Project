import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Top10Component } from './top10.component';

describe('Top10Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Top10Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Top10Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ip-movie-management'`, () => {
    const fixture = TestBed.createComponent(Top10Component);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('ip-movie-management');
  });

  it("Top 10 endpoint", () => {
    const fixture = TestBed.createComponent(Top10Component);
    const component = fixture.componentInstance;
    expect(component.getTop10Endpoint).toBe("http://127.0.0.1:5000/movies/1");
  });

  it("Movie by id endpoint", () => {
    const fixture = TestBed.createComponent(Top10Component);
    const component = fixture.componentInstance;
    expect(component.getMovieByIdEndpoint).toBe("http://127.0.0.1:8000/api/get_movie_by_id");
  });

  it("slides not empty", () => {
    const fixture = TestBed.createComponent(Top10Component);
    const component = fixture.componentInstance;
    expect(component.slides.length).toBeGreaterThan(0);
  });

  it("movieIds not empty", () => {
    const fixture = TestBed.createComponent(Top10Component);
    const component = fixture.componentInstance;
    expect(component.movieIds.length).toBeGreaterThan(0);
  });

  it("animations to have 3 variables", () => {
    const fixture = TestBed.createComponent(Top10Component);
    const component = fixture.componentInstance;
    expect(component.animations.length).toEqual(3);
  });

  it("animations to have 'slide', 'fade', 'none'", () => {
    const anim =  ['slide', 'fade', 'none'];

    const fixture = TestBed.createComponent(Top10Component);
    const component = fixture.componentInstance;
    for(let i = 0; i < component.animations.length; i++) {
      expect(component.animations[i]).toEqual(anim[i]);
    }
  });
});
