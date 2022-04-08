import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from './index.jsx';

const props = {color: '#d30404', percent: '30'};

it('Checks if the Loader renders', () => {
  const { getByTestId } = render(<Loader {...props} />);
  const isLoaderValid = getByTestId('loadProgressBar');
  const loaderComponent = getByTestId('loader');
  expect(isLoaderValid).toBeInTheDocument();
  expect(loaderComponent).toHaveStyle(`backgroundColor: ${props.color}`);
  expect(loaderComponent).toHaveStyle(`width: ${props.percent}%`);
});
it('Checks the Loader in realtime with the prop passed', () => {
    const { getByTestId } = render(<Loader percent='90' color="#9f6262" />);
    const loaderComponent = getByTestId('loader');
  expect(loaderComponent).toHaveStyle('width: 90%');
  expect(loaderComponent).toHaveStyle('backgroundColor: #9f6262');
});