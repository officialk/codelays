import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Loader } from './index.jsx';

const props = {color: '#d30404', width: '40'};

it('Checks if the Loader renders', () => {
  const { getByTestId } = render(<Loader {...props} />);
  const isLoaderValid = getByTestId('loadProgressBar');
  expect(isLoaderValid).toBeInTheDocument();
});

it('Checks if the Loader have the defined color', () => {
  const { getByTestId } = render(<Loader {...props} />);
  const loaderComponent = getByTestId('loader');
  expect(loaderComponent).toHaveStyle(`background-color: ${props.color}`);
});

it('Checks if the Loader have the defined width', () => {
  const { getByTestId } = render(<Loader {...props} />);
  const loaderComponent = getByTestId('loader');
  expect(loaderComponent).toHaveStyle(`width: ${props.width}%`);
});