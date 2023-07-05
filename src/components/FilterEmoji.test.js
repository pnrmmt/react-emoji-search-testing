import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'

describe('Filter emoji', () => { 
    let input;
    beforeEach(()=>{
        render(<App/>)
        input = screen.getByLabelText("input")
    })
    test("emoji listesi filtreye uygun sekilde render olmali",() =>{
        const emoji = "Kissing Heart"
        userEvent.type(input,emoji)
        expect(screen.getByText(emoji)).toBeInTheDocument();
    })

})