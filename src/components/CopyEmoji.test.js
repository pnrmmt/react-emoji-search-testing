import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'

describe("copy emoji", ()=>{
    let copy;
    beforeEach(()=>{
        render(<App/>)
        copy=screen.getByText("Upside Down")

    })
    test("emoji kopyalanmali",()=>{
        userEvent.click(copy)
        expect(copy.parentElement.getAttribute("data-clipboard-text")).toMatch("🙃")
    })
})