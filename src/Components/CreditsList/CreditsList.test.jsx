import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CreditsList } from './index.jsx';

it('Checks if the Loader renders', () => {
  const { getByTestId } = render(<CreditsList />);
  const creditsList = getByTestId('creditsList');
  const credits = getByTestId('credits');
  expect(creditsList).toBeInTheDocument();
  expect(credits).toBeInTheDocument();
});