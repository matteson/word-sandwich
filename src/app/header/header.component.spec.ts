import { HeaderComponent } from './header.component';

describe('Component: HeaderComponent', () => {

  it('Default properties', () => {
    const header = new HeaderComponent();
    header.title = 'Hello';

    expect(header.title).toBe('Hello');
  });

});
