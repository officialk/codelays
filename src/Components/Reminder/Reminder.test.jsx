import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Reminder } from './index'
import {reminder} from '../../config/data.json'

// jest.mock('react', () => ({
//     useState: showReminder => [showReminder, setShowReminder]
//   }));

  const timeout_copy = jest.fn();
  window.setTimeout = timeout_copy;

describe("Render Reminder Component", () => {
        it('Checks if the Reminder renders ', async () => {
        const { queryByTestId,  } = render(<Reminder />);
        // // jest.setTimeout(15*60*1000);
        // const reminderComponent = queryByTestId('loadReminder');
        // expect(reminderComponent).not.toBeInTheDocument();
        expect(timeout_copy).toBeCalledTimes(3);
    });
    //     it('Checks if the Reminder renders ', async () => {
    //     const { queryByTestId } = render(<Reminder />);
    //     // jest.setTimeout(15*60*1000);
    //     const reminderComponent = queryByTestId('loadReminder');
    //     // const handleClick = jest.spyOn(React, "useState");
    //     // handleClick.mockImplementation(showReminder => [showReminder, setShowReminder]);
    //     jest.setTimeout(15*60*1000);
    //     expect(setShowReminder).toHaveBeenCalledWith(1);
    //     expect(reminderComponent).not.toBeInTheDocument();
    //     // expect(reminderComponent).not.toBeInTheDocument();
    // });
}) 
