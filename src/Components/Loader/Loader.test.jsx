import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import { Loader } from './index.jsx';

const props = {color: '#d30404', percent: '30'};

const { getByTestId } = render(<Loader {...props} />);
const isLoaderValid = getByTestId('loadProgressBar');
const loaderComponent = getByTestId('loader');
it('Checks if the Loader renders', () => {
  expect(isLoaderValid).toBeInTheDocument();
  expect(loaderComponent).toHaveStyle(`backgroundColor: ${props.color}`);
  expect(loaderComponent).toHaveStyle(`width: ${props.percent}%`);
});
it('Checks the Loader in realtime with the prop passed', () => {
  act(() => {
    render(<Loader percent='90' />);
  });
  expect(loaderComponent).toHaveStyle('width: 90%');
});