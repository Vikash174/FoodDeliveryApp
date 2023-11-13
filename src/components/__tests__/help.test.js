import { render, screen } from '@testing-library/react';
import Help from '../help_page_components/Help';
import '@testing-library/jest-dom';

test('should load help component', () => {
  render(<Help />);

  const heading = screen.getByRole('heading');

  screen.debug();

  expect(heading).toBeInTheDocument();
});
