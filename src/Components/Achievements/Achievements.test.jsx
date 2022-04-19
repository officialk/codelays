import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Achievements } from './index.jsx';

describe("Achievement Component", () => {

    it('Checks if the Achievements renders when value is true', () => {
        const { getByTestId } = render(<Achievements />);
        const achievementComponent = getByTestId('testAchievements');
        expect(achievementComponent).toBeInTheDocument();
        setTimeout(function (){
            expect(achievementComponent).not.toBeInTheDocument();
        }, 10000);
    });
})