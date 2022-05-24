import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Reminder } from './index'
import {reminder} from '../../config/data.json'

//   const timeout_copy = jest.fn();
//   window.setTimeout = timeout_copy;
//   jest.useFakeTimers()
  jest.setTimeout(15*1000);
describe("Render Reminder Component", () => {
        it('Checks if the Reminder renders ', async  () => {
        const { getByTestId } = render(<Reminder />);
        await waitFor(() =>{
            const rm = getByTestId("loadReminder");
            console.log("waa");
            expect(Reminder).toBeInTheDocument;
        }) 
        // waitForElementToBeRemoved(document.querySelector('div.getOuttaHere'));
        

        // expect(timeout_copy).toBeCalledTimes(3);
    });
}) 