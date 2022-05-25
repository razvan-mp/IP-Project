import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RemoveMovieComponent } from './remove-movie.component';

describe('RemoveMovieComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RemoveMovieComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RemoveMovieComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ip-movie-management'`, () => {
    const fixture = TestBed.createComponent(RemoveMovieComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('ip-movie-management');
  });

  it("endpoint", () => {
    const fixture = TestBed.createComponent(RemoveMovieComponent);
    const component = fixture.componentInstance;
    expect(component.removeMovieEndpoint).toBe("http://127.0.0.1:8000/api/delete_movie/");
  });
});
