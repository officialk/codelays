import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from './index.jsx';
import userEvent from '@testing-library/user-event';

const props = { percent: '30'};

// it('Checks if the Loader renders', () => {
//   const { getByTestId } = render(<Loader {...props} />);
//   const isLoaderValid = getByTestId('loadProgressBar');
//   const loaderComponent = getByTestId('loader');
//   expect(isLoaderValid).toBeInTheDocument();
//   expect(loaderComponent).toHaveStyle(`width: ${props.percent}%`);
// });
// it('Checks the Loader in realtime with the prop passed', () => {
//     const { getByTestId } = render(<Loader percent='90'/>);
//     const loaderComponent = getByTestId('loader');
//   expect(loaderComponent).toHaveStyle('width: 90%');
//   expect(loaderComponent).toHaveStyle('backgroundColor: #d30404');
// });
it('Checks the Loader in realtime with the prop passed', () => {
  const { getByTestId } = render(<Loader percent='90' />);
  const loaderComponent = getByTestId('loader');
  expect(loaderComponent).toHaveStyle('width: 90%');
  userEvent.click[screen.getByRole('button', {name: /change/i})];
  screen.debug();
  expect(screen.getByTestId('loader').style.backgroundColor).toBe('#232dbb');
  // expect(screen.getByTestId('loader').style.backgroundColor).toHaveStyle('backgroundColor: #232dbb');
});