import React from 'react';
import { addDecorator } from '@storybook/react';
import ColorState from '../src/Context/colorContext';

// addDecorator((story) => (
//   <ColorState>{story()}</ColorState>
// ));
export const decorators = [
  (Story) => (
    <ColorState>
      <Story />
    </ColorState>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}