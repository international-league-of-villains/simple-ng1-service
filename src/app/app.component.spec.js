import { AppComponent } from './app.component';

let app = new AppComponent();

describe('AppComponent', () => {
  it('Should set the app title', () => {
    expect(app.title).toContain("I made this");
  });
});