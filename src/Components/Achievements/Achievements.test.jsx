import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Achievements } from './index.jsx';

describe("Achievement Component", () => {

    it('Checks if the Achievements renders when value is true', () => {
        const { getByTestId } = render(<Achievements achievement= {true} />);
        const achievementComponent = getByTestId('testAchievements');
        expect(achievementComponent).toBeInTheDocument();
    });
})