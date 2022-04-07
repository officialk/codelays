import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Loader } from './index.jsx';

it('Checks if the Loader renders', () => {
  const { getByTestId } = render(<Loader color={"#d30404"} width= {"40%"} />);

  const isLoaderValid = getByTestId('loadProgressBar');
  expect(isLoaderValid).toBeInTheDocument();
});