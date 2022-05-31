import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Alerts } from './index.jsx';

describe("Alerts Component", () => {

    it('Checks if the Alerts renders when value is true', () => {
        const { getByTestId } = render(<Alerts open= {true} />);
        const alertComponent = getByTestId('loadAlerts');
        expect(alertComponent).toBeInTheDocument();
    });
    it('Checks if the Alerts does Not renders when value is false', () => {
        const { queryByTestId } = render(<Alerts open= {false} />);
        const alertComponent =  queryByTestId('loadAlerts');
        expect(alertComponent).not.toBeInTheDocument();
    });
}) 
