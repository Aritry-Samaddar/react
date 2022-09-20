import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
describe('test the counter component',()=>{
    test('display success if the counter is working correctly',()=>{
        render(<Counter/>)
        const count=screen.getByTestId('counter')
        const buttonList=screen.getAllByRole('button')
        expect(count.textContent).toEqual('0')
        userEvent.click(buttonList[0])
        expect(count.textContent).toEqual('1')
    })
})