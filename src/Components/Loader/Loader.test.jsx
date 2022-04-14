import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from './index.jsx';

const props = { percent: '30'};

it('Checks if the Loader renders', () => {
  const { getByTestId } = render(<Loader {...props} />);
  const isLoaderValid = getByTestId('loadProgressBar');
  const loaderComponent = getByTestId('loader');
  expect(isLoaderValid).toBeInTheDocument();
  expect(loaderComponent).toHaveStyle(`width: ${props.percent}%`);
});
it('Checks the Loader in realtime with the prop passed', () => {
  const { getByTestId } = render(<Loader percent='90' />);
  const loader = getByTestId('loader');
  const btn = getByTestId('btn');
  fireEvent.click(btn);
  screen.debug();
  expect(loader).toHaveStyle('backgroundColor: #232dbb');
});