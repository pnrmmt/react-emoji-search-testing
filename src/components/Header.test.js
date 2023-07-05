import React from 'react'
import {render,screen} from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'


describe("header",()=>{
    let header;
    beforeEach(()=>{
        render(<App/>)
        header =screen.getByText("Emoji Search")
    })
    test('baslik render edilmeli', () => {
        expect(header).toBeInTheDocument()
    });
})