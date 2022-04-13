import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Newsfeed } from './index.jsx';

it('Checks if the NewsFeed renders', () => {
  const { getByTestId } = render(<Newsfeed />);
  const newsBar = getByTestId('newsBar');
  const news = getByTestId('news');
  expect(newsBar).toBeInTheDocument();
  expect(news).toBeInTheDocument();
});