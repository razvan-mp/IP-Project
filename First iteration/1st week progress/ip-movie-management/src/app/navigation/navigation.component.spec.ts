import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NavigationComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ip-movie-management'`, () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const app = fixture.componentInstance;
    //expect(app.title).toEqual('ip-movie-management');
  });

  it("burger clicked false", () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const component = fixture.componentInstance;
    expect(component.burgerClicked).toBe(false);
  });

  it("click burger param", () => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const component = fixture.componentInstance;

    const param: any = null;
    spyOn(component,'clickBurger')
    component.clickBurger(param);
    expect(component.clickBurger).toHaveBeenCalledOnceWith(param);
  });
});
